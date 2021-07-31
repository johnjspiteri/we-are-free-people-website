import { NgModule } from '@angular/core';
import { volunteerRoutingModule } from './routes';

import { VolunteerComponent } from './component';
import { VolunteerJoinComponent } from './join/component';
import { VolunteerCompleteComponent } from './complete/component';

@NgModule({
	declarations: [VolunteerComponent, VolunteerJoinComponent, VolunteerCompleteComponent],
	entryComponents: [],
	imports: [volunteerRoutingModule],
	exports: [],
})
export class VolunteerModule {}
