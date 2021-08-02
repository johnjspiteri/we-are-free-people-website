import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerFindHelpComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: CareerFindHelpComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CareerFindHelpRoutingModule {}
