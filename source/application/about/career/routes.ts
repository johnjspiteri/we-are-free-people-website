import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerListComponent } from './list/component';
import { CareerListGuard } from './list/guard';

const routes: Routes = [
	{
		path: '',
		component: CareerListComponent,
		canActivate: [CareerListGuard],
		children: [
			{
				path: ':department',
				component: CareerListComponent,
			},
			{
				path: ':department/:team',
				component: CareerListComponent,
			},
			{
				path: ':department/:team/:category',
				component: CareerListComponent,
			},
			{
				path: ':department/:team/:category/:experience',
				component: CareerListComponent,
			},
		],
	},
	{
		path: ':department/:team/:category/:experience/:clean',
		loadChildren: async () => (await import('./find/module')).CareerFindModule,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CareerRoutingModule {}
