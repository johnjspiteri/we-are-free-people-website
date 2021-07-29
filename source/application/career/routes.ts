import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareerListComponent } from './list/component';
import { CareerListResolve } from './list/resolve';
import { CareerFindComponent } from './find/component';
import { CareerFindResolve } from './find/resolve';

const routes: Routes = [
	{
		path: '',
		component: CareerListComponent,
		resolve: {
			careers: CareerListResolve
		}
	}, {
		path: ':career_department/:career_role',
		resolve: {
			career: CareerFindResolve,
		},
		component: CareerFindComponent,
		children: [
			{
				path: 'apply-now',
				loadChildren: async () => (await import('./find/application/module')).CareerApplicationModule,
			},
		],

	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class CareerRoutingModule {}
