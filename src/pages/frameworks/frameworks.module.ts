import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrameworksPage } from './frameworks';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, AppState } from './store';
import { FrameworksService } from './frameworks/frameworks.service';
import { FrameworksActions } from './frameworks/frameworks.actions';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    FrameworksPage,
    FrameworksComponent,
    FilterTextComponent
  ],
  imports: [
    HttpModule,
    NgReduxModule,
    IonicPageModule.forChild(FrameworksPage),
  ],
  providers: [FrameworksService, FrameworksActions]
})
export class FrameworksPageModule {
    
    constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.provideStore(store);
    console.log("sdsd");
  }
}
