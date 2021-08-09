import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { VideoFindHelpComponent } from './component';
import { VideoFindHelpRoutingModule } from './routes';

@NgModule({
	declarations: [VideoFindHelpComponent],
	imports: [VideoFindHelpRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class VideoFindHelpModule {}
