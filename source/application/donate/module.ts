import { NgModule } from '@angular/core';
import { donateComponent } from './component';
import { ConsultationFormComponent } from './form/component';
import { ConsultationConfirmationComponent } from './confirmation/component';
import { ConsultationState } from './state';
import { ConsultationRoutingModule } from './routes';

@NgModule({
	declarations: [donateComponent, ConsultationFormComponent, ConsultationConfirmationComponent],
	entryComponents: [],
	imports: [ConsultationRoutingModule],
	exports: [],
	providers: [ConsultationState],
})
export class DonateModule {}
