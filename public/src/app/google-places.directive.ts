import { Directive, OnInit,ElementRef } from '@angular/core';
const google = require('@types/googlemaps');

import { from } from 'rxjs';

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {
  private element : HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
   }

   ngOnInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }
}
