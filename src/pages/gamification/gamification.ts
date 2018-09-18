import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MEDALS } from "../../data/data.medals";

@IonicPage()
@Component({
  selector: 'page-gamification',
  templateUrl: 'gamification.html',
})
export class GamificationPage {
  medals: any[] = [];
  nuevaData = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medals = MEDALS.slice(0);
    this.nuevaData = this.agrupar(this.medals, 2);
    console.log(this.nuevaData);
  }

  private agrupar(arr:any, tamano:number) {
    let nuevoArreglo =[];

    for(let i = 0; i<arr.length; i+=tamano) {
      nuevoArreglo.push(arr.slice(i, i+tamano));
    }
    return nuevoArreglo;
  }

}
