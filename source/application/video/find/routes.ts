import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoFindComponent } from '_application/video/find/component';

const routes: Routes = [
	{
		path: '',
		component: VideoFindComponent,
		canActivate: [],
		children: [
			{
				path: 'help',
				loadChildren: async () => (await import('./help/module')).VideoFindHelpModule,
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VideoFindRoutingModule {}
