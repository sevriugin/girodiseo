import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { TagDetailComponent } from './tag-detail/tag-detail.component';
import { TagRegistrationComponent } from './tag-registration/tag-registration.component';
import { TagRegSmsComponent } from './tag-reg-sms/tag-reg-sms.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SmsConfirmationComponent } from './sms-confirmation/sms-confirmation.component';
import { AboutComponent } from './about/about.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { RideComponent } from './ride/ride.component';
import { RideDetailComponent } from './ride-detail/ride-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { UsePointsComponent } from './use-points/use-points.component';
import { TnxDetailComponent } from './tnx-detail/tnx-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ItemComponent } from './item/item.component';
import { ShoppingResultComponent } from './shopping-result/shopping-result.component';
import { FrameComponent } from './frame/frame.component';
import { AdminComponent } from './admin/admin.component';
import { ExpertComponent } from './expert/expert.component';
import { BikeshopComponent } from './bikeshop/bikeshop.component';
import { OrderComponent } from './order/order.component';
import { GeoRideComponent } from './geo-ride/geo-ride.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'reg', component: TagRegistrationComponent },
  { path: 'tag/:id', component: TagDetailComponent },
  { path: 'regsms/:id/:mobile', component: TagRegSmsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:page', component: LoginComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'smsconfirm/:mobile', component: SmsConfirmationComponent },
  { path: 'smsconfirm/:mobile/:page', component: SmsConfirmationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'update', component: ProfileUpdateComponent },
  { path: 'ride', component: RideComponent },
  { path: 'georide', component: GeoRideComponent },
  { path: 'ride/:id', component: RideDetailComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'item/:id/:ref', component: ItemComponent },
  { path: 'item/:id/:ref/:locked', component: ItemComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'shoppingtag/:id', component: ShoppingComponent },
  { path: 'shopping/:result', component: ShoppingResultComponent },
  { path: 'getstarted', component: GetstartedComponent },
  { path: 'use/:acc/:points', component: UsePointsComponent },
  { path: 'tnx/:hash', component: TnxDetailComponent },
  { path: 'frame', component: FrameComponent },
  { path: 'frame/:id', component: FrameComponent },
  { path: 'frame/:id/:locked', component: FrameComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'expert', component: ExpertComponent },
  { path: 'bikeshop', component: BikeshopComponent },
  { path: 'order/:ref', component: OrderComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
