import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoListComponent } from './list/component';

const routes: Routes = [
	{
		path: '',
		component: VideoListComponent,
		canActivate: [],
		children: [
			{
				path: ':area',
				component: VideoListComponent,
			},
			{
				path: ':area/:section',
				component: VideoListComponent,
			},
			{
				path: ':area/:section/:category',
				component: VideoListComponent,
			},
			{
				path: ':area/:section/:category/:topic',
				component: VideoListComponent,
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VideoRoutingModule {}
