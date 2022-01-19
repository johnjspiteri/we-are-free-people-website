import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/module';
import { RootComponent } from './component';
import { RoutingModule } from './routes';

@NgModule({
	declarations: [RootComponent],
	imports: [CommonModule, RoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class Module {}
