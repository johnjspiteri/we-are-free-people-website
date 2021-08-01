import { NgModule } from '@angular/core';
import { VideoRoutingModule } from './routes';
import { VideoComponent } from './component';

@NgModule({
	declarations: [VideoComponent],
	entryComponents: [],
	imports: [VideoRoutingModule],
	exports: [],
})
export class VideoModule {}
