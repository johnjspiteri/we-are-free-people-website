import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerFindComponent } from '../find/component';
import { CareerFindGuard } from '../find/guard';

const routes: Routes = [
	{
		path: '',
		component: CareerFindComponent,
		canActivate: [CareerFindGuard],
		children: [
			{
				path: 'apply-now',
				loadChildren: async () => (await import('./application/module')).CareerApplicationModule,
			},
			{
				path: 'help',
				loadChildren: async () => (await import('./help/module')).CareerFindHelpModule,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CareerFindRoutingModule {}
