import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import{AppPage}from '../app/app';
import{IotPage} from'../iot/iot';
import{VfxPage} from'../vfx/vfx';
import{GraphicPage} from'../graphic/graphic';
import{WebPage} from'../web/web';
import{GamePage} from'../game/game';
/**
 * Generated class for the WorkshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-workshop',
  templateUrl: 'workshop.html',
})
export class WorkshopPage {

  constructor(public navCtrl: NavController) {
  }
d()
{
  this.navCtrl.push(AppPage);
}  
e()
{
  this.navCtrl.push(WebPage);
}
f()
{
  this.navCtrl.push(VfxPage);
}
g()
{
  this.navCtrl.push(IotPage);
}
i()
{
  this.navCtrl.push(GraphicPage);
}
h()
{
  this.navCtrl.push(GamePage);
}
ionViewDidLoad() {
    console.log('ionViewDidLoad WorkshopPage');
  }

}
