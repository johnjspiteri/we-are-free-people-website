import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { CareerFindHelpRoutingModule } from './routes';
import { CareerFindHelpComponent } from './component';

@NgModule({
	imports: [CareerFindHelpRoutingModule, SharedModule],
	declarations: [CareerFindHelpComponent],
	exports: [],
	providers: [],
})
export class CareerFindHelpModule {}
