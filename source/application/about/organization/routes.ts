import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from '_application/about/organization/component';

const routes: Routes = [
	{
		path: '',
		component: OrganizationComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OrganizationRoutingModule {}
