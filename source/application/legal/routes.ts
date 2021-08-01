import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalPrivacyComponent } from './privacy/component';
import { LegalTermsComponent } from './terms/component';
import { LegalComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: LegalComponent,
		children: [
			{
				path: 'privacy-policy',
				component: LegalPrivacyComponent,
			},
			{
				path: 'terms-of-use',
				component: LegalTermsComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LegalRoutingModule {}
