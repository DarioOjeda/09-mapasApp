import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

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
    
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-5.322671059976026, 36.34116260979489],
      zoom: 17
      });
  }


}
