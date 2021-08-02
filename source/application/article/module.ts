import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticleFindComponent } from './find/component';
import { ArticleListComponent } from './list/component';
import { ArticleCategoryFilterPipe } from './list/pipe/category';
import { ArticleTitleFilterPipe } from './list/pipe/title';
import { ArticleTopicFilterPipe } from './list/pipe/topic';
import { ArticleSortFilterPipe } from './list/pipe/sort';
import { ArticleTypeFilterPipe } from './list/pipe/type';
import { ArticleTagsFilterPipe } from './list/pipe/tags';
import { ArticleRoutingModule } from './routes';
import * as fromArticleReducer from './store/reducer';
import { ArticleEffectsTasks } from './store/effects/tasks';
import { ArticleEffectsCompositions } from './store/effects/compositions';

@NgModule({
	declarations: [ArticleListComponent, ArticleFindComponent, ArticleCategoryFilterPipe, ArticleTitleFilterPipe, ArticleTopicFilterPipe, ArticleSortFilterPipe, ArticleTypeFilterPipe, ArticleTagsFilterPipe],
	imports: [StoreModule.forFeature(fromArticleReducer.FEATURE_KEY, fromArticleReducer.REDUCER), EffectsModule.forFeature([ArticleEffectsTasks, ArticleEffectsCompositions]), ArticleRoutingModule, SharedModule],
	providers: [],
})
export class ArticleModule {}
