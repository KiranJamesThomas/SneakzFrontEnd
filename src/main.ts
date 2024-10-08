/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ShopPageComponent } from './app/shop-page/shop-page.component';


bootstrapApplication(ShopPageComponent, appConfig)
  .catch((err) => console.error(err));
