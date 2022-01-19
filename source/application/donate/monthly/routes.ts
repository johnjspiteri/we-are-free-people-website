import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { DonateAmountComponent } from './amount/component';
import { DonateCompleteComponent } from './complete/component';
import { DonatePaymentComponent } from './payment/component';
import { donateComponent } from '_application/donate/component';
// import { DonateAmountComponent } from '_application/donate/one-time/amount/component';
import { DonateAmountComponent } from '_application/donate/monthly/amount/component';
// import { ConsultationConfirmationCanActivateGuard } from './confirmation/guard';

const routes: Routes = [
	{
		path: '',
		component: donateComponent,
		children: [
			{
				path: '',
				redirectTo: 'amount',
			},
			{
				path: 'amount',
				component: DonateAmountComponent,
			},
			{
				path: 'payment',
				component: DonatePaymentComponent,
			},
			{
				path: 'complete',
				component: DonateCompleteComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MonthlyRoutingModule {}
