import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VolunteerComponent } from './component';
import { VolunteerJoinComponent } from './join/component';
import { VolunteerCompleteComponent } from './complete/component';

const routes: Routes = [
	{
		path: '',
		component: VolunteerComponent,
		children: [
			{
				path: '',
				component: VolunteerJoinComponent,
			},
			{
				path: 'complete',
				component: VolunteerCompleteComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class VolunteerRoutingModule {}
