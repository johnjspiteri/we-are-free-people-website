import { NgModule } from '@angular/core';
import { MediaListComponent } from './list/component';
import { MediaListState } from './list/search/state';
import { MediaFindComponent } from './find/component';
import { CategoryFilterPipe } from './list/search/pipe/category';
import { ComposeBase64ImagePipe } from './list/search/pipe/base64';
import { SubCategoryFilterPipe } from './list/search/pipe/topic';
import { TextFilterPipe } from './list/search/pipe/filter';
import { MediaRoutingModule } from './routes';

@NgModule({
	declarations: [CategoryFilterPipe, ComposeBase64ImagePipe, SubCategoryFilterPipe, TextFilterPipe, MediaListComponent, MediaFindComponent],
	entryComponents: [],
	imports: [MediaRoutingModule],
	exports: [],
	providers: [MediaListState],
})
export class MediaModule {}
