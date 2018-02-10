import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import{WorkshopPage} from'../workshop/workshop';
import{ContactPage} from'../contact/contact';
import{AboutPage} from '../about/about';
import{TeamPage} from'../team/team';
/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  constructor(public navCtrl: NavController) {
  }
p()
{
this.navCtrl.push(WorkshopPage);
}
q()
{
this.navCtrl.push(ContactPage);
}
r()
{
this.navCtrl.push(AboutPage);
}
s()
{
this.navCtrl.push(TeamPage);
}
 ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
