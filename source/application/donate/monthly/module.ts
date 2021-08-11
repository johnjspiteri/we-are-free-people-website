export class ContactModule {}
import { NgModule } from '@angular/core';
import { DonateAmountComponent } from './amount/component';
import { DonateCompleteComponent } from './complete/component';
import { MonthlyRoutingModule } from './routes';
import { DonatePaymentComponent } from './payment/component';
import { SharedModule } from '_application/shared/module';

@NgModule({
	declarations: [DonateAmountComponent, DonateCompleteComponent, DonatePaymentComponent],
	entryComponents: [],
	imports: [MonthlyRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class MonthlyModule {}
