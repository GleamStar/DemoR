import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginScopes } from '../../models/login.options';
import { TabsPage } from '../../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare var WindowsAzure: any;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private loginProvider: LoginProvider, private storage: Storage ) {
     this.next("");
  }

  loginFacebook(){
     this.loginProvider.login(LoginScopes.Facebook)
     .then(res => {
       this.next(res);
      })
  }
  loginLinledln(){
     this.loginProvider.login(LoginScopes.Linkedln)
     .then(res => this.next(res))  
  }
  next(result : string){
    this.storage.set("name", result)
    this.navCtrl.push(TabsPage);
  }
}
