import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultationComponent } from './component';
import { ConsultationFormComponent } from './form/component';
import { ConsultationConfirmationComponent } from './confirmation/component';
// import { ConsultationConfirmationCanActivateGuard } from './confirmation/guard';

const routes: Routes = [
	{
		path: '',
		component: ConsultationComponent,
		children: [
			{
				path: '',
				component: ConsultationFormComponent,
			},
			{
				path: 'confirmation',
				// canActivate: [ConsultationConfirmationCanActivateGuard],
				component: ConsultationConfirmationComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConsultationRoutingModule {}
