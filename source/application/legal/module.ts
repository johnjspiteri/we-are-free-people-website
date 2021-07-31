import { NgModule } from '@angular/core';
import { LegalRoutingModule } from './routes';

import { LegalPrivacyComponent } from './privacy/component';
import { LegalTermsComponent } from './terms/component';

@NgModule({
	declarations: [LegalPrivacyComponent, LegalTermsComponent],
	entryComponents: [],
	imports: [LegalRoutingModule],
	exports: [],
})
export class LegalModule {}
