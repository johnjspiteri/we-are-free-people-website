import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './component';
import { OrganizationComponent } from './organization/component';
import { PhilosophyComponent } from './philosophy/component';
import { PurposeComponent } from './purpose/component';
import { FinancesComponent } from './finances/component';

const routes: Routes = [
	{
		path: '',
		component: AboutComponent,
		children: [
			{
				path: '',
				redirectTo: 'organization',
			},
			{
				path: 'careers',
				loadChildren: () => import('./career/module').then((module) => module.CareerModule),
			},
			{
				path: 'organization',
				loadChildren: () => import('./organization/module').then((module) => module.OrganizationModule),
			},
			{
				path: 'philosophy',
				loadChildren: () => import('./philosophy/module').then((module) => module.PhilosophyModule),
			},
			{
				path: 'purpose',
				loadChildren: () => import('./purpose/module').then((module) => module.PurposeModule),
			},
			{
				path: 'finances',
				loadChildren: () => import('./finances/module').then((module) => module.FinancesModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
