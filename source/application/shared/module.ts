import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IASelectModule } from '@interface-agency/directives.select.option';
import { IASelectCountryModule } from '@interface-agency/directives.select.country';
import { IASelectTagModule } from '@interface-agency/directives.select.tag';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { IAFieldValidationModule } from '@interface-agency/directives.validation.field';
import { IAPhoneNumberModule } from '@interface-agency/directives.format.phone';
import { IAZipCodeModule } from '@interface-agency/directives.zip-code';
import { IATitleCaseModule } from '@interface-agency/pipes.format.titlecase';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, IASelectModule, IASelectCountryModule, IASelectTagModule, FontAwesomeModule, MatSidenavModule, IAFieldValidationModule, IAPhoneNumberModule, IAZipCodeModule, IATitleCaseModule];
@NgModule({
	declarations: [],
	imports: modules,
	providers: [],
	exports: modules,
})
export class SharedModule {}
