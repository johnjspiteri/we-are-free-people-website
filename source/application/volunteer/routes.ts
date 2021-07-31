import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VolunteerJoinComponent } from './join/component';
import { VolunteerCommunityComponent } from './community/component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'volunteer',
	},
	{
		path: 'join',
		component: VolunteerJoinComponent,
	},
	{
		path: 'community',
		component: VolunteerCommunityComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class volunteerRoutingModule {}
