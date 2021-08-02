import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { donateComponent } from './component';
import { DonateAmountComponent } from './amount/component';
import { DonateCompleteComponent } from './complete/component';
import { DonateInformationComponent } from './information/component';
import { DonatePaymentComponent } from './payment/component';
// import { ConsultationConfirmationCanActivateGuard } from './confirmation/guard';

const routes: Routes = [
	{
		path: '',
		component: donateComponent,
		children: [
			{
				path: '',
				redirectTo: 'confirmation',
			},
			{
				path: 'complete',
				component: DonateCompleteComponent,
			},
			{
				path: 'amount',
				component: DonateAmountComponent,
			},
			{
				path: 'information',
				component: DonateInformationComponent,
			},
			{
				path: 'payment',
				component: DonatePaymentComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConsultationRoutingModule {}
