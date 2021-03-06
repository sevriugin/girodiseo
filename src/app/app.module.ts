import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { TagsComponent } from './tags/tags.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { TagRegistrationComponent } from './tag-registration/tag-registration.component';
import { TagRegSmsComponent } from './tag-reg-sms/tag-reg-sms.component';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { LandingComponent } from './landing/landing.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { SmsConfirmationComponent } from './sms-confirmation/sms-confirmation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TagService } from './tag.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatePipe } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { RiderService } from './rider.service';
import { RideComponent } from './ride/ride.component';
import { ClockService } from './clock.service';
import { MatTableModule } from '@angular/material/table';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GravatarModule } from 'ngx-gravatar';
import { ImagesService } from './images.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { MatCardModule } from '@angular/material/card';
import { EthcontractService } from './ethereum/ethcontract.service';
import { EthereumModule } from './ethereum/ethereum.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { ClipboardModule } from 'ngx-clipboard';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { UsePointsComponent } from './use-points/use-points.component';
import { MatSliderModule } from '@angular/material/slider';
import { TransactionService } from './transaction.service';
import { TnxDetailComponent } from './tnx-detail/tnx-detail.component';
import { QrcodeDialogComponent } from './qrcode-dialog/qrcode-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxKjuaModule } from 'ngx-kjua';
import { MatRippleModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { UserTagsComponent } from './user-tags/user-tags.component';
import { UserTnxComponent } from './user-tnx/user-tnx.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { OrderService } from './order.service';
import { ItemComponent } from './item/item.component';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
import { ShoppingResultComponent } from './shopping-result/shopping-result.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FrameComponent } from './frame/frame.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { AdminComponent } from './admin/admin.component';
import { ExpertComponent } from './expert/expert.component';
import { BikeshopComponent } from './bikeshop/bikeshop.component';
import { OrderComponent } from './order/order.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { GeoRideComponent } from './geo-ride/geo-ride.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

const gMapsKey = 'AIzaSyDvc8SLjfA0D-hLcNrB01q58Uh2As98A14';


@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    TagDetailComponent,
    TagRegistrationComponent,
    TagRegSmsComponent,
    NavBarComponent,
    LandingComponent,
    LoginComponent,
    SmsConfirmationComponent,
    UserProfileComponent,
    AboutComponent,
    ProfileUpdateComponent,
    RideComponent,
    RideDetailComponent,
    DashboardComponent,
    GetstartedComponent,
    UsePointsComponent,
    TnxDetailComponent,
    QrcodeDialogComponent,
    HeaderComponent,
    UserTagsComponent,
    UserTnxComponent,
    ShoppingComponent,
    ItemComponent,
    ItemDialogComponent,
    ShoppingResultComponent,
    FrameComponent,
    AdminComponent,
    ExpertComponent,
    BikeshopComponent,
    OrderComponent,
    UserOrdersComponent,
    GeoRideComponent,
  ],
  entryComponents: [
    QrcodeDialogComponent,
    ItemDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatGridListModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    GravatarModule,
    MatProgressBarModule,
    VgCoreModule,
    VgBufferingModule,
    VgControlsModule,
    VgOverlayPlayModule,
    MatCardModule,
    EthereumModule,
    MatSlideToggleModule,
    HttpClientModule,
    ClipboardModule,
    ZXingScannerModule,
    MatSliderModule,
    MatDialogModule,
    NgxKjuaModule,
    MatRippleModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatRadioModule,
    AgmCoreModule.forRoot({
      apiKey: gMapsKey
    })
  ],
  providers: [
    AngularFirestoreModule,
    AngularFireAuthModule,
    AuthService,
    TagService,
    DatePipe,
    RiderService,
    ClockService,
    ImagesService,
    EthcontractService,
    TransactionService,
    OrderService,
    { provide: HttpBackend, useClass: CustExtBrowserXhr },
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
