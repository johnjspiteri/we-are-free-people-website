import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './component';
import { ContactRoutingModule } from './routes';

@NgModule({
	declarations: [ContactComponent],
	entryComponents: [],
	imports: [CommonModule, ContactRoutingModule],
	exports: [],
	providers: [],
})
export class ContactModule {}
