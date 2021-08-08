import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EventFindComponent } from './find/component';
import { EventListComponent } from './list/component';
import { EventCategoryFilterPipe } from './list/pipe/category';
import { EventTitleFilterPipe } from './list/pipe/title';
import { EventTopicFilterPipe } from './list/pipe/topic';
import { EventSortFilterPipe } from './list/pipe/sort';
import { EventTypeFilterPipe } from './list/pipe/type';
import { EventTagsFilterPipe } from './list/pipe/tags';
import { EventRoutingModule } from './routes';
import * as fromEventReducer from './store/reducer';
import { EventEffectsTasks } from './store/effects/tasks';
import { EventEffectsCompositions } from './store/effects/compositions';

@NgModule({
	declarations: [EventListComponent, EventFindComponent, EventCategoryFilterPipe, EventTitleFilterPipe, EventTopicFilterPipe, EventSortFilterPipe, EventTypeFilterPipe, EventTagsFilterPipe],
	imports: [
		StoreModule.forFeature(fromEventReducer.FEATURE_KEY, fromEventReducer.REDUCER),
		EffectsModule.forFeature([EventEffectsTasks, EventEffectsCompositions]),
		EventRoutingModule, SharedModule],
	providers: [],
})
export class EventModule {}
