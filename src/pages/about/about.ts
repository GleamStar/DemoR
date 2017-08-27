import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LinkedIn, LinkedInLoginScopes } from '@ionic-native/linkedin';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
  public inf  : string;
  public log : any;
  public se : any;
  public userId : string;
  constructor(public navCtrl: NavController, private linkedin: LinkedIn, private fb: Facebook) {


  }


   async onClicked(){
     const scopes : LinkedInLoginScopes[] = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
     await this.linkedin.login(scopes, true);
     await this.linkedin.getRequest('people/~').then( res => this.log = res.firstName)
  }
   async facebook(){
    await this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res: FacebookLoginResponse) => this.userId = res.authResponse.userID)
      .catch(e => console.log('Error logging into Facebook', e));
    await this.fb.api("/" + this.userId, null)
       .then( res => this.se = res.name)
       .catch(e => this.se = JSON.stringify(e));
  }

}
