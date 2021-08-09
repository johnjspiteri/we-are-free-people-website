import { NgModule } from '@angular/core';
import { SharedModule } from '_application/shared/module';
import { EventFindHelpComponent } from './component';
import { EventFindHelpRoutingModule } from './routes';

@NgModule({
	declarations: [EventFindHelpComponent],
	imports: [EventFindHelpRoutingModule, SharedModule],
	exports: [],
	providers: [],
})
export class EventFindHelpModule {}
