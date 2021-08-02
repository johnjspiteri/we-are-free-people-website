import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFindComponent } from '_application/article/find/component';
import { ArticleFindGuard } from '_application/article/find/guard';

const routes: Routes = [
	{
		path: '',
		component: ArticleFindComponent,
		canActivate: [ArticleFindGuard],
		children: [
			{
				path: 'help',
				loadChildren: async () => (await import('./help/module')).ArticleFindHelpModule,
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleFindRoutingModule {}
