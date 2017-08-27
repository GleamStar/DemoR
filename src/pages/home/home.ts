import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public userName : string;
    title: string = 'MSP Roadshow';
    lat: number = 50.4432679;
    lng: number = 30.4950459;
    zoom: number = 4;
    markers: marker[] = [
	  {
		  lat: 50.4432679,
		  lng: 30.4950459,
		  label: '1',
		  draggable: true
	  },
	  {
		  lat: 49.8579229,
		  lng: 24.0261192,
		  label: '5',
		  draggable: false
	  },
	  {
		  lat: 46.4802293,
		  lng: 30.7479671,
		  label: '4',
		  draggable: true
	  },
    {
		  lat: 48.472949,
		  lng: 35.0281,
		  label: '3',
		  draggable: true
	  },
    {
		  lat: 49.2342802,
		  lng: 28.4660804,
		  label: '2',
		  draggable: true
	  }
  ]
  constructor(public navCtrl: NavController, private storage: Storage ) {
        storage.get('name').then((val) => {
      this.userName = val
  });
  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}