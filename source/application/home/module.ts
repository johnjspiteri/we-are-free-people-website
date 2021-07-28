import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './component';
import { HomeRoutingModule } from './routes';
import { SharedModule } from '_application/shared/module';

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, HomeRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class HomeModule {}
