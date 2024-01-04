import { Component } from '@angular/core';
// import { AuthenticationType } from 'azure-maps-control';
// import * as atlas from 'azure-maps-control';
//
// export const environment = {
//   production: false,
//   authOptions: {
//     authType: AuthenticationType.subscriptionKey,
//     subscriptionKey: '7Jr1jNzGZeQq7JIKY_4YZX_NPRfWlmGEX8k1-5rcUx4',
//   },
//   azureMapsSubscriptionKey: '7Jr1jNzGZeQq7JIKY_4YZX_NPRfWlmGEX8k1-5rcUx4'
// };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // @ViewChild("mapView", { static: true }) mapViewChild: ElementRef;
  // map: atlas.Map | undefined;
  //
  // constructor() {
  //   this.mapViewChild = new ElementRef(null);
  // }
  //
  // ngOnInit() {
  //   this.ngAfterViewInit();
  // }

  // ngAfterViewInit() {
  //   /*Azure Map Integration*/
  //   setTimeout(() => {
  //     this.map = new atlas.Map(this.mapViewChild.nativeElement, {
  //       authOptions: environment.authOptions,
  //       style : 'satellite_road_labels',
  //       showLogo : false,
  //       zoom: 14,
  //       enableAccessibility : false,
  //     })
  //     // @ts-ignore
  //     this.map.events.add('ready', this.mapReady.bind(this))
  //   })
  // }
  //
  // mapReady() {
  //   // Your code when the map is ready
  // }
}
