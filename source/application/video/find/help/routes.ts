import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoFindHelpComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: VideoFindHelpComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VideoFindHelpRoutingModule {}
