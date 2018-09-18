import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { CampaignPage, CouponPage, GamificationPage, MapPage, ProfilePage } from "../index.pages";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;
  tab5:any;

  constructor() {
    this.tab1 = GamificationPage;
    this.tab2 = MapPage;
    this.tab3 = CampaignPage;
    this.tab4 = CouponPage;
    this.tab5 = ProfilePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
