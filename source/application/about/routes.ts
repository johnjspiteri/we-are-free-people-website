import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AboutAwardListComponent} from './award/list/component';
import {AboutAwardFindComponent} from './award/find/component';
import {AboutHistoryComponent} from './history/component';
import {AboutTeamListComponent} from './team/list/component';
import {AboutTeamListResolve} from './team/list/resolve';
import {AboutTeamFindComponent} from './team/find/component';
import {AboutTeamFindResolve} from './team/find/resolve';

const routes: Routes = [{
	path: '',
	redirectTo: 'history'
}, {
	path: 'awards',
	component: AboutAwardListComponent,
	// resolve: {
	// 	awards: AboutAwardListResolve
	// }
}, {
	path: 'awards/:award_clean',
	component: AboutAwardFindComponent,
	// resolve: {
	// 	awards: AboutAwardFindResolve
	// }
}, {
	path: 'history',
	component: AboutHistoryComponent,
	// resolve: {
	// 	articles: MediaListResolve
	// }
}, {
	path: 'our-team',
	component: AboutTeamListComponent,
	resolve: {
		members: AboutTeamListResolve
	}
}, {
	path: 'our-team/:member_role/:member_name',
	component: AboutTeamFindComponent,
	resolve: {
		member: AboutTeamFindResolve
	}
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AboutRoutingModule {
}
