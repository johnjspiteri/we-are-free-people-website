import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './routes';
import { CommonModule } from '@angular/common';

import { PurposeComponent } from './purpose/component';
import { PhilosophyComponent } from './philosophy/component';
import { OrganizationComponent } from './organization/component';
import { FinancesComponent } from './finances/component';

@NgModule({
	declarations: [PurposeComponent, FinancesComponent, PhilosophyComponent, OrganizationComponent],
	entryComponents: [],
	imports: [CommonModule, AboutRoutingModule],
	exports: [],
	providers: [],
})
export class AboutModule {}
