import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { donateComponent } from './component';
import { ConsultationFormComponent } from './form/component';
import { ConsultationConfirmationComponent } from './confirmation/component';
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
				path: 'confirmation',
				component: ConsultationConfirmationComponent,
			},
			{
				path: 'form',
				component: ConsultationFormComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConsultationRoutingModule {}
