import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

/**
 * Generated class for the VfxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vfx',
  templateUrl: 'vfx.html',
})
export class VfxPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VfxPage');
  }

}
