import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Order, Item, ORDERSTATUS } from '../order';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemDialogComponent, ItemDialogData } from '../item-dialog/item-dialog.component';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Output() item: Item;
  @ViewChild('scanner') scanner: ZXingScannerComponent;

  scanning: boolean;
  loading: boolean;
  qr_code: string;
  invalid: boolean;
  id: string;
  url: string;
  index: number;
  schemaProductId: string;
  schemaProductName: string;
  schemaProductImg: string;
  schemaProductPrice: string;
  itemQty: number;
  price: number;
  ref: string;
  order: Order;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private http: HttpClient,
    public dialog: MatDialog,
    private orderService: OrderService
    ) { }

  loadItem(): void {
    this.url = `https://us-central1-cloud-firestore-test-d95bf.cloudfunctions.net/snitch?id=${this.id}`;
      this.http.get(this.url, { responseType: 'text' }).subscribe((res: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res, 'text/html');
        this.schemaProductId = doc.getElementById('schemaProductId').innerHTML;
        this.schemaProductName = doc.getElementById('schemaProductName').innerHTML;
        this.schemaProductImg = doc.getElementById('schemaProductImg').innerHTML;
        this.schemaProductPrice = doc.getElementById('schemaProductPrice').innerHTML;
        this.price = parseInt(doc.getElementById('schemaProductPrice').getAttribute('content'), 10);
        this.loading = false;
        this.itemQty = 1;
        this.item = {
          id: this.id,
          code: this.schemaProductId,
          name: this.schemaProductName,
          img: this.schemaProductImg,
          price: this.price,
          priceTag: this.schemaProductPrice,
          currency: 'RUB',
          qty: 1
        };
      });
  }

  findItem(): void {
    if (!this.order) { return; }
    if (!this.order.items) { return; }

    let index = -1;
    for (let i = 0; i < this.order.items.length; i++) {
      if (this.order.items[i].id === this.id) {
        index = i;
        break;
      }
    }

    if (index >= 0) {
      console.log(`Item is found on index: ${index}`);
      this.index = index;
    }
  }

  showItemByIndex(): void {
    if (this.index < 0) { return; }
    if (!this.order) { return; }
    if (!this.order.items) { return; }
    if (this.index >= this.order.items.length) { return; }
    this.schemaProductId = this.order.items[this.index].code;
    this.schemaProductImg = this.order.items[this.index].img;
    this.schemaProductName = this.order.items[this.index].name;
    this.price = this.order.items[this.index].price;
    this.schemaProductPrice = this.order.items[this.index].priceTag;
    this.itemQty = this.order.items[this.index].qty;
    this.loading = false;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ref = this.route.snapshot.paramMap.get('ref');
    this.index = -1;
    this.invalid = false;
    this.qr_code = '';
    this.url = '';
    this.loading = true;
    this.itemQty = 0;

    if (this.id === 'NEW') {
      this.scanning = true;
    } else {
      this.scanning = false;
    }

    if (this.ref) {
      this.orderService.getOrderByRef(this.ref).subscribe((res) => {
        if (res.length > 0) {
          this.order = res[0];
        } else {
          this.order = null;
        }
        if (this.id !== 'NEW') {
          this.findItem();
          this.showItemByIndex();
        }
      });
    } else {
      if (this.id !== 'NEW') {
        this.loadItem();
      }
    }
  }

  getItemId(): void {
    const data: ItemDialogData = {
      id: 'NEW',
      scan: false
    };
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      width: '250px',
      height: '250px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Item Dialog was closed');
      this.id = result;
      if (this.id === '') {
        this.scanning = true;
      } else {
        this.scanning = false;
        this.loadItem();
      }
    });
  }

  camerasFoundHandler(event) {
    this.scanner.scan(event[0].deviceId);
  }

  scanCompleteHandler(event) {
    this.scanning = false;
    console.log(event);
    if (event instanceof Result) {
      this.qr_code = event.getText();
      this.id = this.qr_code.slice(0, 8);
      this.loadItem();
      console.log('Item URL: ' + this.url);
    } else {
      console.error('Scanner error');
    }
  }

  close(): void {
    this.scanning = false;
  }

  addItem(): void {
    if (this.ref && this.order) {
      if (this.schemaProductId) {

        const item: Item = {
          id: this.id,
          code: this.schemaProductId,
          name: this.schemaProductName,
          qty: this.itemQty,
          currency: 'RUB',
          priceTag: this.schemaProductPrice,
          price: this.price,
          img: this.schemaProductImg
        };

        if (this.index >= 0) {
          if (this.order.items) {
            if (this.index < this.order.items.length) {
              this.order.items[this.index] = item;
            }
          }
        } else {
          this.order.items.push(item);
        }

        this.orderService.updateOrder(this.order);
        this.location.back();
      }
    }
  }

  plusOne(): void {
    this.itemQty += 1;
  }

  minusOne(): void {
    this.itemQty = this.itemQty > 1 ? this.itemQty - 1 : 1;
  }

}
