import { NgModule } from '@angular/core';
import { CareerListComponent } from './list/component';
import { CareerFindComponent } from './find/component';
// import { CareerListState } from './list/state';
// import { CategoryFilterPipe } from './list/category';
// import { ComposeBase64ImagePipe } from './list/pipe';
// import { SubCategoryFilterPipe } from './list/sub.category';
// import { TextFilterPipe } from './list/filter';
import { CareerRoutingModule } from './routes';

@NgModule({
	declarations: [
		// CategoryFilterPipe,
		// ComposeBase64ImagePipe,
		// SubCategoryFilterPipe,
		// TextFilterPipe,
		CareerListComponent,
		CareerFindComponent,
	],
	entryComponents: [],
	imports: [CareerRoutingModule],
	exports: [],
	providers: [
		// CareerListState
	],
})
export class CareerModule {}
