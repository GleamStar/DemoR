import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login'
import { FrameworksPage } from '../frameworks/frameworks'
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'FrameworksPage';

  constructor() {

  }
}
