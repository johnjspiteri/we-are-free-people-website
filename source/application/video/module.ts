import { NgModule } from '@angular/core';
import { VideoRoutingModule } from './routes';
import { SharedModule } from '_application/shared/module';
import { VideoListComponent } from './list/component';

@NgModule({
	declarations: [VideoListComponent],
	imports: [SharedModule, VideoRoutingModule],
	providers: [],
})
export class VideoModule {}
