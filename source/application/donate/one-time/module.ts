export class ContactModule {}
import { NgModule } from '@angular/core';
import { DonateAmountComponent } from './amount/component';
import { DonateCompleteComponent } from './complete/component';
import { OneTimeRoutingModule } from './routes';
import { DonatePaymentComponent } from './payment/component';
import { SharedModule } from '_application/shared/module';

@NgModule({
	declarations: [DonateAmountComponent, DonateCompleteComponent, DonatePaymentComponent],
	entryComponents: [],
	imports: [OneTimeRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class OneTimeModule {}
