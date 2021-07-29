import { NgModule } from '@angular/core';
import { ConsultationComponent } from './component';
import { ConsultationFormComponent } from './form/component';
import { ConsultationConfirmationComponent } from './confirmation/component';
import { ConsultationState } from './state';
import { ConsultationRoutingModule } from './routes';

@NgModule({
	declarations: [ConsultationComponent, ConsultationFormComponent, ConsultationConfirmationComponent],
	entryComponents: [],
	imports: [ConsultationRoutingModule],
	exports: [],
	providers: [ConsultationState],
})
export class ConsultationModule {}
