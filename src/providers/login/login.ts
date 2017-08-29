import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LinkedIn, LinkedInLoginScopes } from '@ionic-native/linkedin';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginScopes } from '../../models/login.options'
/*
 Generated class for the LoginProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */
@Injectable()
export class LoginProvider {

  private typeOfLog : LoginScopes = LoginScopes.None;
  public facebookId : string;
  public linkedInId : string;

  constructor(private linkedin: LinkedIn, private fb: Facebook ) {
  }

  async login(loginType : LoginScopes ) {
    switch (loginType) {
      case LoginScopes.Facebook :
        return await this.loginFacebook();
      case LoginScopes.Linkedln :
        return await this.loginLinkedin();
    }
  }

  async loginLinkedin() {
    const scopes : LinkedInLoginScopes[] = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
    var status = await this.linkedin.login(scopes, true);
    let userData = await this.linkedin.getRequest('people/~');
    this.typeOfLog = LoginScopes.Linkedln;
    this.linkedInId = userData.id;
    return `${userData.firstName}  ${userData.lastName}`
  }

  async loginFacebook() {
    let loginResponce =  await this.fb.login(['public_profile', 'user_friends', 'email']);
    this.facebookId = loginResponce.authResponse.userID ;
    let userData = await this.fb.api("/" + this.facebookId, null);
    this.typeOfLog = LoginScopes.Facebook;
    return userData.name
  }
}
