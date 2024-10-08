import { Routes } from '@angular/router';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { PpComponent } from './pp/pp.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: PpComponent },
  { path: 'shop-page', component: ShopPageComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'registration', component: RegistrationComponent },
];
