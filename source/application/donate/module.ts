import { NgModule } from '@angular/core';
import { donateComponent } from './component';
import { ConsultationState } from './state';
import { ConsultationRoutingModule } from './routes';
import { SharedModule } from '_application/shared/module';

@NgModule({
	declarations: [donateComponent],
	entryComponents: [],
	imports: [ConsultationRoutingModule, SharedModule],
	exports: [],
	providers: [ConsultationState],
})
export class DonateModule {}
