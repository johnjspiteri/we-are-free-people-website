import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventFindHelpComponent } from './component';

const routes: Routes = [
	{
		path: '',
		component: EventFindHelpComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EventFindHelpRoutingModule {}
