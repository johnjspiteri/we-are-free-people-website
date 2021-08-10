import { NgModule } from '@angular/core';
import { VolunteerRoutingModule } from './routes';
import { SharedModule } from '_application/shared/module';
import { VolunteerComponent } from './component';
import { VolunteerJoinComponent } from './join/component';
import { VolunteerCompleteComponent } from './complete/component';

@NgModule({
	declarations: [VolunteerComponent, VolunteerJoinComponent, VolunteerCompleteComponent],
	entryComponents: [],
	imports: [VolunteerRoutingModule, SharedModule],
	exports: [],
})
export class VolunteerModule {}
