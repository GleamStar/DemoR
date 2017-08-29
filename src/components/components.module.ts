import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { AgmCoreModule } from '@agm/core';
import { CommonModule }  from '@angular/common';
import {  } from '../components/components.module';
@NgModule({
  declarations: [MapComponent],
  imports: [ AgmCoreModule.forRoot({
    apiKey: 'AIzaSyD7LbUekytH5aIzxgNjZf8a4LVWJZ2B-LY'
  }),
    CommonModule],
  exports: [MapComponent]
})
export class ComponentsModule {}
