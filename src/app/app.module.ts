import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{IntroPage}from '../pages/intro/intro';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{AppPage}from '../pages/app/app';
import{IotPage} from'../pages/iot/iot';
import{VfxPage} from'../pages/vfx/vfx';
import{GraphicPage} from'../pages/graphic/graphic';
import{WebPage} from'../pages/web/web';
import{GamePage} from'../pages/game/game';
import{WorkshopPage} from'../pages/workshop/workshop';
import { ContentPage } from '../pages/content/content';
import{ContactPage} from'../pages/contact/contact';
import{AboutPage} from '../pages/about/about';
import{TeamPage} from'../pages/team/team';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    AppPage,
    IotPage,
    VfxPage,
    GraphicPage,
    WebPage,
   GamePage,
   WorkshopPage,
   ContentPage,
   ContactPage,
   AboutPage,
   TeamPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    AppPage,
    IotPage,
    VfxPage,
    GraphicPage,
    WebPage,
    GamePage,
  WorkshopPage,
  ContentPage,
  ContactPage,
  AboutPage,
  TeamPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
