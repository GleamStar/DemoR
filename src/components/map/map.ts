import { Component } from '@angular/core';

/**
 * Generated class for the MapComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html',
  styleUrls : ['/src/components/map/map.scss']
})
export class MapComponent {
  public markers: marker[] = markersValues;
  public title: string = 'MSP Roadshow';
  public lat: number = 50.4432679;
  public lng: number = 30.4950459;
  public zoom: number = 4;
  constructor() {

  }
}

const markersValues: marker[] = [
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
];

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
