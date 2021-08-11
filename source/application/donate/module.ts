import { NgModule } from '@angular/core';
import { donateComponent } from './component';
import { DonateAmountComponent } from './amount/component';
import { DonateCompleteComponent } from './complete/component';
import { ConsultationState } from './state';
import { ConsultationRoutingModule } from './routes';
import { DonatePaymentComponent } from './payment/component';
import { SharedModule } from '_application/shared/module';

@NgModule({
	declarations: [donateComponent, DonateAmountComponent, DonateCompleteComponent, DonatePaymentComponent],
	entryComponents: [],
	imports: [ConsultationRoutingModule, SharedModule],
	exports: [],
	providers: [ConsultationState],
})
export class DonateModule {}
