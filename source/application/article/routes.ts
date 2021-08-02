import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './list/component';
import { ArticleListGuard } from '_application/article/list/guard';

const routes: Routes = [
	{
		path: '',
		component: ArticleListComponent,
		canActivate: [ArticleListGuard],
		children: [
			{
				path: ':area',
				component: ArticleListComponent,
			},
			{
				path: ':area/:section',
				component: ArticleListComponent,
			},
			{
				path: ':area/:section/:category',
				component: ArticleListComponent,
			},
			{
				path: ':area/:section/:category/:topic',
				component: ArticleListComponent,
			},
		],
	},
	{
		path: ':area/:section/:category/:topic/:clean',
		loadChildren: async () => (await import('./find/module')).ArticleFindModule,
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleRoutingModule {}
