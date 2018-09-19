import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;
  user = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.slides.paginationType = 'progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }

  login() {
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });

    if (this.user.email == '' || this.user.password == '') {
      toaster.setMessage('Todos los campos son requeridos');
      toaster.present();
    }
    else {

      let loading = this.loadingCtrl.create({
        content: 'Verificando'
      });

      loading.present();

      setTimeout(() => {
        loading.dismiss();
      }, 3000);
    }
  }

}
