// myfarm.component.ts

import {Component, OnInit} from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-myfarm',
  templateUrl: './myfarm.component.html',
  styleUrls: ['./myfarm.component.css']
})
export class MyfarmComponent implements OnInit{

  ngOnInit() {
    this.loadGoogleMap();
  }
  loadGoogleMap() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ2c_pOSOFYSjxGMwkFvCVWKjYOM9siow&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      this.initMap();
    };
  }

  initMap() {
    // Get the map container element
    const mapContainer = document.getElementById('google-map');

    if (mapContainer) {
      // Coordinates for the polygon
      const polygonCoords = [
        { lat: 21.119587, lng: 79.048324 },
        { lat: 21.119293, lng: 79.048204 },
        { lat: 21.118681, lng: 79.048005 },
        { lat: 21.118666, lng: 79.048675 },
        { lat: 21.119600, lng: 79.048894 },
      ];

      // Code for initializing the map goes here
      const mapOptions = {
        center: { lat:21.118666, lng: 79.048675 }, // Set the initial center of the map
        zoom: 30, // Set the initial zoom level
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: false,
        streetViewControl : false,
      };

      const map = new google.maps.Map(mapContainer, mapOptions);

      // Create a polygon and set its path
      const polygon = new google.maps.Polygon({
        paths: polygonCoords,
        strokeColor: '#FFA500',
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: '#0E560E',
        fillOpacity: 0.8,
      });

      // Set the polygon on the map
      polygon.setMap(map);
    } else {
      console.error('Map container not found');
    }
  }


  leftContainerWidth: string = '900px';
  rightContainerWidth: string = '500px';

  toggleLeftContainer() {
    if (this.leftContainerWidth === '20px' || this.leftContainerWidth === '') {
      this.leftContainerWidth = '900px';
    } else {
      this.leftContainerWidth = '20px';
    }
  }

  toggleRightContainer() {
    if (this.rightContainerWidth === '20px' || this.rightContainerWidth === '') {
      this.rightContainerWidth = '500px';
    } else {
      this.rightContainerWidth = '20px';
    }
  }

}
