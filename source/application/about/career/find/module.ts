import { NgModule } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '_application/shared/module';
import { CareerFindRoutingModule } from './routes';

@NgModule({
	declarations: [],
	imports: [CareerFindRoutingModule, SharedModule, HttpClientJsonpModule, GoogleMapsModule],
	providers: [],
})
export class CareerFindModule {}
