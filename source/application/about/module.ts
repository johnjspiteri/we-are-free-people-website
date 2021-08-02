import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './routes';
// import { SharedModule } from './shared/module';

import { PurposeComponent } from './purpose/component';
import { PhilosophyComponent } from './philosophy/component';
import { OrganizationComponent } from './organization/component';
import { AboutComponent } from './component';
import { FinancesComponent } from './finances/component';

@NgModule({
	declarations: [PurposeComponent, PhilosophyComponent, OrganizationComponent, FinancesComponent, AboutComponent],
	imports: [AboutRoutingModule],
	providers: [],
})
export class AboutModule {}
