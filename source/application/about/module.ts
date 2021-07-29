import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './routes';
// import { SharedModule } from './shared/module';

import { AboutAwardListComponent } from './award/list/component';
import { AboutAwardFindComponent } from './award/find/component';
import { AboutHistoryComponent } from './history/component';
import { AboutTeamListComponent } from './team/list/component';
import { AboutTeamFindComponent } from './team/find/component';

@NgModule({
	declarations: [AboutAwardListComponent, AboutAwardFindComponent, AboutTeamListComponent, AboutTeamFindComponent, AboutHistoryComponent],
	imports: [AboutRoutingModule],
	providers: [],
})
export class AboutModule {}
