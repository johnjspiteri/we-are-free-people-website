import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './routes';
// import { SharedModule } from './shared/module';

import { AboutPurposeComponent } from './purpose/component';
import { AboutPhilosophyComponent } from './philosophy/component';
import { AboutOrganizationComponent } from './organization/component';
import { AboutComponent } from './component';
import { AboutFinancesComponent } from './finances/component';

@NgModule({
	declarations: [AboutPurposeComponent, AboutPhilosophyComponent, AboutOrganizationComponent, AboutFinancesComponent, AboutComponent],
	imports: [AboutRoutingModule],
	providers: [],
})
export class AboutModule {}
