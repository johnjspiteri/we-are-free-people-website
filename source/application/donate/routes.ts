import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { donateComponent } from './component';
import { DonateAmountComponent } from './amount/component';
import { DonateCompleteComponent } from './complete/component';
import { DonatePaymentComponent } from './payment/component';
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
			{
				path: 'register',
				component: DonateRegisterComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConsultationRoutingModule {}
