import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

/**
 * Generated class for the WebPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebPage');
  }

}
