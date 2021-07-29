import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';

@Component({
	selector: 'legal-contact',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
	@ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

	center = {
		lat: 35.897907,
		lng: 14.511341,
	};

	markerOptions = { draggable: false };
	markers = [
		{
			position: {
				lat: this.center.lat,
				lng: this.center.lng,
			},
		},
	];
	zoom = 15;

	options: google.maps.MapOptions = {
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		disableDefaultUI: false,
		fullscreenControl: false,
		minZoom: this.zoom,
		maxZoom: this.zoom,
	};
}
