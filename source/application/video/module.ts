import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { VideoListComponent } from './list/component';

@NgModule({
	declarations: [VideoListComponent],
	imports: [SharedModule],
	providers: [],
})
export class VideoModule {}
