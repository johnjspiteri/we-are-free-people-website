import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IASelectModule } from '@interface-agency/select';
import { IASelectCountryModule } from '@interface-agency/select-country';
import { IASelectTagModule } from '@interface-agency/select-tag';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FieldValidationModule } from '@interface-agency/field-validation';
import { PhoneNumberModule } from '@interface-agency/format-phone-number-directive';
import { ZipCodeModule } from '@interface-agency/format-zip-code-directive';
import { TitleCaseDashModule } from '@interface-agency/format-title-case-pipe';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, IASelectModule, IASelectCountryModule, IASelectTagModule, FontAwesomeModule, MatSidenavModule, FieldValidationModule, PhoneNumberModule, ZipCodeModule, TitleCaseDashModule];
@NgModule({
	declarations: [],
	imports: modules,
	providers: [],
	exports: modules,
})
export class SharedModule {}
