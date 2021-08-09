import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { ArticleFindHelpComponent } from './component';
import { ArticleFindHelpRoutingModule } from './routes';

@NgModule({
	declarations: [ArticleFindHelpComponent],
	imports: [ArticleFindHelpRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class ArticleFindHelpModule {}
