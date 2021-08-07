import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetitionComponent } from './component';
import { PetitionJoinComponent } from './join/component';
import { PetitionCompleteComponent } from './complete/component';

const routes: Routes = [
	{
		path: '',
		component: PetitionComponent,
		children: [
			{
				path: '',
				component: PetitionJoinComponent,
			},
			{
				path: 'complete',
				component: PetitionCompleteComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class petitionRoutingModule {}
