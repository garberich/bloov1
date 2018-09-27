import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';

import {CampaignPage,
        CouponPage,
        GamificationPage,
        MapPage,
        ProfilePage,
        TabsPage,
        LoginPage} from "../pages/index.pages";

@NgModule({
  declarations: [
    MyApp,
    CampaignPage,
    CouponPage,
    GamificationPage,
    MapPage,
    ProfilePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-gWEQQ-sqMsB2EMUb3zvCrSE3jZ_O1b0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CampaignPage,
    CouponPage,
    GamificationPage,
    MapPage,
    ProfilePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
