import { NgModule } from '@angular/core';
import { VideoRoutingModule } from './routes';
import { SharedModule } from '_application/shared/module';
import { VideoListComponent } from './list/component';
import { VideoFindComponent } from './find/component';

@NgModule({
	declarations: [VideoListComponent, VideoFindComponent],
	imports: [SharedModule, VideoRoutingModule],
	providers: [],
})
export class VideoModule {}
