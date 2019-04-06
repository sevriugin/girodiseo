import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ItemDialogData {
  id: string;
  scan: boolean;
}

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent implements OnInit {

  itemId: string;

  constructor(
    public dialogRef: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItemDialogData) {
      this.data.id = '';
      this.data.scan = true;
    }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
