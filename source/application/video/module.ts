import { NgModule } from '@angular/core';
import { VideoRoutingModule } from './routes';
import { SharedModule } from '_application/shared/module';
import { VideoListComponent } from './list/component';
import { VideoFindComponent } from './find/component';
import { StoreModule } from '@ngrx/store';
import * as fromVideoReducer from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { VideoEffectsTasks } from './store/effects/tasks';
import { VideoEffectsCompositions } from './store/effects/compositions';

@NgModule({
	declarations: [VideoListComponent, VideoFindComponent],
	imports: [StoreModule.forFeature(fromVideoReducer.FEATURE_KEY, fromVideoReducer.REDUCER), EffectsModule.forFeature([VideoEffectsTasks, VideoEffectsCompositions]), SharedModule, VideoRoutingModule],
	providers: [],
})
export class VideoModule {}
