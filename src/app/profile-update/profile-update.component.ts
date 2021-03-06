import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TagService } from '../tag.service';
import { AuthService } from '../auth.service';
import { RiderService } from '../rider.service';
import { Rider, Bike} from '../rider';
import { ImagesService } from '../images.service';
import { Observable, Subscription } from 'rxjs';
import { Observer } from 'firebase';
import { finalize } from 'rxjs/operators';
import { Wallet } from '../wallet';
import { EthcontractService } from '../ethereum/ethcontract.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  rider: Rider;
  mobile: string;
  username: string;
  nikname: string;
  avatar: string;
  email: string;
  msg: string;
  progress: boolean;
  hash: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  percentage: number;
  wallet: Wallet;
  checked: boolean;
  disabled: boolean;
  updates: {
    username: boolean,
    email: boolean,
    nikname: boolean,
    rider: boolean,
    newrider: boolean,
    avatar: boolean,
    wallet: boolean
  };


  constructor(
    private zone: NgZone,
    private tagService: TagService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private riderService: RiderService,
    private imagesService: ImagesService,
    private storage: AngularFireStorage,
    private contractService: EthcontractService
    ) { }

  ngOnInit() {
    this.clear();
    this.riderService.getRiderByMobile(this.authService.getUserPhone())
      .subscribe(riders => {
        if (riders) {
          if (riders.length > 0) {
            this.rider = riders[0];
            this.nikname = this.rider.nikname;
            this.hash = this.rider.id;
            if (this.rider.wallet) {
              this.disabled = true;
              this.wallet = this.rider.wallet;
            } else {
              this.wallet.id = this.hash;
            }
          }
        }
       });
      this.contractService.getMnemonic().subscribe((mnemonic) => {
        this.wallet.mnemonic = mnemonic;
        console.log(`get mnemonic: ${this.wallet.mnemonic}`);
        this.contractService.getAccounts().subscribe((accounts) => {
          this.wallet.accounts = accounts;
          console.log(`get accounts`);
          console.log(this.wallet.accounts);
        });
      });
  }

  avatarURL(): string |null {
    if (this.avatar) {
      return this.avatar;
    }
    if (this.rider) {
      return this.rider.avatar;
    }
  }

  clear() {
    this.mobile = this.authService.getUserPhone();
    this.username = this.authService.getUserName();
    this.email = this.authService.getUserEmail();
    this.progress = false;
    this.msg = null;
    this.avatar = null;
    this.percentage = 0;
    this.checked = false;
    this.disabled = false;
    this.wallet = { id: null, accounts: [], mnemonic: null};
    this.updates = {username: false, email: false, nikname: false, rider: false, newrider: false, avatar: false, wallet: false};
  }

  update(e: Event) {
    this.progress = true;
    e.preventDefault();
    e.stopPropagation();
    if (this.username) {
      this.authService.updateProfileCB(this.username, null, (err) => {
        if (err) {
          this.msg = err;
          this.progress = false;
          this.updates.username = false;
          console.log(`ProfileUpdateComponent: update: ${err}`);
        } else {
          this.progress = false;
          this.updates.username = true;
          this.msg = 'Profile is updated';
        }
      });
    }
    if (this.email) {
      this.authService.updateEmailCB(this.email, (err) => {
        if (err) {
          this.msg = err;
          this.progress = false;
          this.updates.email = false;
          console.log(`ProfileUpdateComponent: update: ${err}`);
        } else {
          this.progress = false;
          this.updates.email = true;
          this.msg = 'Profile is updated';
        }
      });
    }
    if (this.nikname) {
      if (this.rider) {
        this.rider.nikname = this.nikname;
        this.updates.rider = true;
      } else {
        this.rider = { id: this.authService.getUID(), mobile: this.mobile, nikname: this.nikname };
        this.updates.rider = true;
        this.updates.newrider = true;
      }
    }
    if (this.avatar) {
      if (this.rider) {
        this.rider.avatar = this.avatar;
        this.updates.avatar = true;
      } else {
        this.rider = { id: this.authService.getUID(), mobile: this.mobile, nikname: this.nikname, avatar: this.avatar };
        this.updates.rider = true;
        this.updates.newrider = true;
      }
    }
    console.log('Check this out!!');
    if (this.checked && !this.rider.wallet) {
      console.log(`generate wallet`);
      console.log(this.wallet);
      // generate new wallet
      if (this.rider) {
        this.rider.wallet = this.wallet;
        this.updates.wallet = true;
      } else {
        // tslint:disable-next-line:max-line-length
        this.rider = { id: this.authService.getUID(), mobile: this.mobile, nikname: this.nikname, avatar: this.avatar, wallet: this.wallet };
        this.updates.rider = true;
        this.updates.newrider = true;
      }
    }
    if (this.updates.rider) {
      if (this.updates.newrider) {
        this.riderService.addNewRiderCB(this.rider, (err, ref) => {
          if (err) {
            this.msg = err;
            this.progress = false;
          } else {
            this.progress = false;
            this.updates.rider = true;
            this.updates.newrider = false;
            if (this.nikname) {
              this.updates.nikname = true;
            }
            if (this.avatar) {
              this.updates.avatar = true;
            }
            if (this.checked) {
              this.updates.wallet = true;
            }
            this.msg = 'Profile is updated';
          }
        });
      } else {
        this.riderService.updateRiderByIdCB(this.rider, (err, ref) => {
          if (err) {
            this.msg = err;
            this.progress = false;
          } else {
            this.progress = false;
            this.updates.rider = true;
            this.updates.newrider = false;
            if (this.nikname) {
              this.updates.nikname = true;
            }
            if (this.avatar) {
              this.updates.avatar = true;
            }
            if (this.checked) {
              this.updates.wallet = true;
            }
            this.msg = 'Profile is updated';
          }
        });
      }
    }
  }
  cancel() {
    this.router.navigate([`/profile`]);
  }

  handleFileInput(files: FileList): void {
    const file = files[0];
    const filePath = `${this.authService.getUID()}/images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges()
      .pipe(finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => this.avatar = url);
      }))
      .subscribe();
  }
}
