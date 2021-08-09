import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleFindRegisterComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: ArticleFindRegisterComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleFindRegisterRoutingModule {}
