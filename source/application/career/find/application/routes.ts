import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerApplicationComponent } from './component';
import { CareerApplicationAcceptedComponent } from './accepted/component';
import { CareerApplicationAcceptedGuard } from './accepted/guard';

const routes: Routes = [
	{
		path: '',
		component: CareerApplicationComponent,
	},
	{
		path: 'accepted',
		canActivate: [CareerApplicationAcceptedGuard],
		component: CareerApplicationAcceptedComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CareerApplicationRoutingModule {}
