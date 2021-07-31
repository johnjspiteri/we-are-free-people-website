import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalPrivacyComponent } from './privacy/component';
import { LegalTermsComponent } from './terms/component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'legal',
	},
	{
		path: 'privacy',
		component: LegalPrivacyComponent,
	},
	{
		path: 'terms',
		component: LegalTermsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LegalRoutingModule {}
