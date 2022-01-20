import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '_application/shared/module';

import { ContactComponent } from './component';
import { ContactRoutingModule } from './routes';

@NgModule({
	declarations: [ContactComponent],
	entryComponents: [],
	imports: [CommonModule, ContactRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class ContactModule {}
