import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './routes';
// import { SharedModule } from './shared/module';

import { PurposeComponent } from './purpose/component';
import { PhilosophyComponent } from './philosophy/component';
import { OrganizationComponent } from './organization/component';
import { AboutComponent } from './component';
import { CommonModule } from '@angular/common';
import { FinancesComponent } from './finances/component';

@NgModule({
	declarations: [PurposeComponent, FinancesComponent, PhilosophyComponent, OrganizationComponent, AboutComponent],
	entryComponents: [],
	imports: [CommonModule, AboutRoutingModule],
	exports: [],
	providers: [],
})
export class AboutModule {}
