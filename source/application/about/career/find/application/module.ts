import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { CareerApplicationAcceptedComponent } from './accepted/component';
import { CareerApplicationComponent } from './component';
import { CareerApplicationRoutingModule } from './routes';
import { CareerApplicationAcceptedGuard } from './accepted/guard';

@NgModule({
	declarations: [CareerApplicationAcceptedComponent, CareerApplicationComponent],
	imports: [CareerApplicationRoutingModule, SharedModule],
	providers: [CareerApplicationAcceptedGuard],
})
export class CareerApplicationModule {}
