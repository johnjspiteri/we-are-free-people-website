import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyComponent } from './component';
import { PrivacyRoutingModule } from './routes';

@NgModule({
	declarations: [PrivacyComponent],
	entryComponents: [],
	imports: [CommonModule, PrivacyRoutingModule],
	exports: [],
	providers: [],
})
export class PrivacyModule {}
