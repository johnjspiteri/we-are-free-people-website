import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from '_application/about/finances/component';

const routes: Routes = [
	{
		path: '',
		component: FinancesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FinancesRoutingModule {}
