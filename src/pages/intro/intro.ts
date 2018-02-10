import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import{ContentPage}from'../content/content';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController) {
  }
login()
{
  this.navCtrl.push(ContentPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
