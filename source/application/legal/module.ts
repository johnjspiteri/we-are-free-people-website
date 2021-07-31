import { NgModule } from '@angular/core';
import { LegalRoutingModule } from './routes';

import { LegalPrivacyComponent } from './privacy/component';
import { LegalTermsComponent } from './terms/component';
import { LegalComponent } from './component';

@NgModule({
	declarations: [LegalPrivacyComponent, LegalTermsComponent, LegalComponent],
	entryComponents: [],
	imports: [LegalRoutingModule],
	exports: [],
})
export class LegalModule {}
