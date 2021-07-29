import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MediaListComponent} from './list/component';
import {MediaListResolve} from './list/resolve';
import {MediaFindComponent} from './find/component';
import {MediaFindResolve} from './find/resolve';

const routes: Routes = [{
	path: '',
	component: MediaListComponent,
	resolve: {
		articles: MediaListResolve
	}
}, {
	path: ':article_clean',
	component: MediaFindComponent,
	resolve: {
		article: MediaFindResolve
	}
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MediaRoutingModule {
}
