import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { donateComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: donateComponent,
	},
	{
		path: 'one-time',
		loadChildren: () => import('./one-time/module').then((module) => module.OneTimeModule),
	},
	{
		path: 'monthly',
		loadChildren: () => import('./monthly/module').then((module) => module.MonthlyModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConsultationRoutingModule {}
