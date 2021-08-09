import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';

import { ArticleFindRegisterComponent } from './component';
import { ArticleFindRegisterRoutingModule } from './routes';

@NgModule({
	declarations: [ArticleFindRegisterComponent],
	imports: [ArticleFindRegisterRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class ArticleFindRegisterModule {}
