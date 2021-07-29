import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsComponent } from './component';
import { TermsRoutingModule } from './routes';

@NgModule({
	declarations: [TermsComponent],
	entryComponents: [],
	imports: [CommonModule, TermsRoutingModule],
	exports: [],
	providers: [],
})
export class TermsModule {}
