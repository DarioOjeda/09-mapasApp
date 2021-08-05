import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container {
      height: 100%;
      width: 100%;
    }
    .row {
      background-color: white;
      width: 400px;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
    }
  `]
})
export class ZoomRangeComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { 
    // console.log( 'Constructor',this.divMapa);
    //Aquí no tiene valor, no lo puedo usar todavía
  }

  ngOnInit(): void {
    // console.log( 'OnInit',this.divMapa);
    //Tampoco tiene valor, no lo puedo usar(undefined)
    
  }
  ngAfterViewInit(): void {


    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-5.322671059976026, 36.34116260979489],
      zoom: this.zoomLevel
      });

      this.mapa.on('zoom', (ev) => {
        this.zoomLevel = this.mapa.getZoom();
      });

      this.mapa.on('zoomend', (ev) => {
        if ( this.mapa.getZoom() > 18){
          this.mapa.zoomTo( 18 );
        }
      });
  }

  zoomOut() {
    this.mapa.zoomOut();

    this.zoomLevel = this.mapa.getZoom();
  }

  zoomIn() {
    this.mapa.zoomIn();

    this.zoomLevel = this.mapa.getZoom();

  }

  zoomCambio(valor: string) {
    this.mapa.zoomTo(Number(valor));
  }

}
