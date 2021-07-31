import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaListComponent } from './list/component';
import { MediaListResolve } from './list/resolve';
import { MediaFindComponent } from './find/component';
import { MediaFindResolve } from './find/resolve';
import { MediaVideoComponent } from '_application/media/video/component';
import { MediaPublicationComponent } from '_application/media/publication/component';
import { MediaAwardComponent } from '_application/media/award/component';

const routes: Routes = [
	{
		path: '',
		component: MediaListComponent,
		resolve: {
			articles: MediaListResolve,
		},
	},
	{
		path: ':article_clean',
		component: MediaFindComponent,
		resolve: {
			article: MediaFindResolve,
		},
	},
	{
		path: 'video',
		component: MediaVideoComponent,
		resolve: {
			article: MediaFindResolve,
		},
	},
	{
		path: 'publication',
		component: MediaPublicationComponent,
		resolve: {
			article: MediaFindResolve,
		},
	},
	{
		path: 'award',
		component: MediaAwardComponent,
		resolve: {
			article: MediaFindResolve,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MediaRoutingModule {}
