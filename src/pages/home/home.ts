import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{IntroPage} from'../intro/intro';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
a()
{
  this.navCtrl.push(IntroPage);
}
  ionViewDidLoad()
  {
    console.log('ionViewDidLoad Homepage');
    }
  }
