import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment';
// Esto quiere decir toma toda esa librería de js y 
// la vas a conocer como mapboxgl

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #mapa {
      height: 100%;
      width: 100%;
    }
  `]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapBoxToken;
    
    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

}
