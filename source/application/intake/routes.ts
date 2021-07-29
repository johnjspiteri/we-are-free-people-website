import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Intake } from './component';
import { IntakePersonal } from './personal/component';
// import { IntakePersonalCanActivateGuard } from './personal/guard';
import { IntakeDetail } from './detail/component';
import { IntakeOverview } from './overview/component';
// import { IntakeOverviewCanActivateGuard } from './overview/guard';
import { IntakeSent } from './sent/component';
// import { IntakeSentCanActivateGuard } from './sent/guard';

const routes: Routes = [
	{
		path: '',
		component: Intake,
		children: [
			{
				path: '',
				redirectTo: 'detail',
			},
			{
				path: 'detail',
				component: IntakeDetail,
			},
			{
				path: 'personal',
				// canActivate: [IntakePersonalCanActivateGuard],
				component: IntakePersonal,
			},
			{
				path: 'overview',
				// canActivate: [IntakeOverviewCanActivateGuard],
				component: IntakeOverview,
			},
			{
				path: 'sent',
				// canActivate: [IntakeSentCanActivateGuard],
				component: IntakeSent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class IntakeRoutingModule {}
