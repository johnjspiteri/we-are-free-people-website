import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './list/component';
import { ArticleListResolve } from './list/resolve';
import { ArticleFindComponent } from './find/component';
import { ArticleFindResolve } from './find/resolve';

const routes: Routes = [
	{
		path: '',
		component: ArticleListComponent,
		resolve: {
			articles: ArticleListResolve,
		},
	},
	{
		path: ':article_clean',
		component: ArticleFindComponent,
		resolve: {
			article: ArticleFindResolve,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleRoutingModule {}
