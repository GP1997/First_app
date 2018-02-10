import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

/**
 * Generated class for the IotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-iot',
  templateUrl: 'iot.html',
})
export class IotPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IotPage');
  }

}
