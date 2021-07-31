import { NgModule } from '@angular/core';
import { volunteerRoutingModule } from './routes';

import { VolunteerJoinComponent } from './join/component';
import { VolunteerCommunityComponent } from './community/component';

@NgModule({
	declarations: [VolunteerJoinComponent, VolunteerCommunityComponent],
	entryComponents: [],
	imports: [volunteerRoutingModule],
	exports: [],
})
export class VolunteerModule {}
