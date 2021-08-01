import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './component';
import { AboutOrganizationComponent } from './organization/component';
import { AboutPhilosophyComponent } from './philosophy/component';
import { AboutPurposeComponent } from './purpose/component';
import { AboutFinancesComponent } from './finances/component';

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
				path: 'organization',
				component: AboutOrganizationComponent,
			},
			{
				path: 'philosophy',
				component: AboutPhilosophyComponent,
			},
			{
				path: 'purpose',
				component: AboutPurposeComponent,
			},
			{
				path: 'finances',
				component: AboutFinancesComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AboutRoutingModule {}
