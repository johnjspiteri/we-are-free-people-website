import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'organization',
	},
	{
		path: 'careers',
		loadChildren: () => import('./career/module').then((module) => module.CareerModule),
	},
	{
		path: 'finances',
		loadChildren: () => import('./finances/module').then((module) => module.FinancesModule),
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
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
