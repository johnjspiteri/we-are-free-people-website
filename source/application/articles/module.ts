import { NgModule } from '@angular/core';
import { ArticleListComponent } from './list/component';
import { ArticleFindComponent } from './find/component';
import { ArticleListState } from './list/search/state';
import { CategoryFilterPipe } from './list/search/pipe/category';
import { ComposeBase64ImagePipe } from './list/search/pipe/base64';
import { TopicFilterPipe } from './list/search/pipe/topic';
import { TextFilterPipe } from './list/search/pipe/filter';
import { ArticleRoutingModule } from './routes';

@NgModule({
	declarations: [CategoryFilterPipe, ComposeBase64ImagePipe, TopicFilterPipe, TextFilterPipe, ArticleListComponent, ArticleFindComponent],
	entryComponents: [],
	imports: [ArticleRoutingModule],
	exports: [],
	providers: [ArticleListState],
})
export class ArticleModule {}
