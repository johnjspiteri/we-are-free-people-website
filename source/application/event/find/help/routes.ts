import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleFindHelpComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: ArticleFindHelpComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleFindHelpRoutingModule {}
