import { NgModule } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from '_application/shared/module';
import { CareerFindComponent } from './find/component';
import { CareerListComponent } from './list/component';
import { CareerDepartmentFilterPipe } from './list/pipe/department';
import { CareerRoleFilterPipe } from './list/pipe/role';
import { CareerTeamFilterPipe } from './list/pipe/team';
import { CareerTypeFilterPipe } from './list/pipe/type';
import { CareerLocationFilterPipe } from './list/pipe/location';
import { CareerSortFilterPipe } from './list/pipe/sort';
import { CareerRoutingModule } from './routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCareerReducer from './store/reducer';
import { CareerEffectsTasks } from './store/effects/tasks';
import { CareerEffectsCompositions } from './store/effects/compositions';

@NgModule({
	declarations: [CareerFindComponent, CareerDepartmentFilterPipe, CareerRoleFilterPipe, CareerTeamFilterPipe, CareerTypeFilterPipe, CareerLocationFilterPipe, CareerSortFilterPipe, CareerListComponent],
	imports: [
		StoreModule.forFeature(fromCareerReducer.FEATURE_KEY, fromCareerReducer.REDUCER),
		EffectsModule.forFeature([CareerEffectsTasks, CareerEffectsCompositions]),
		CareerRoutingModule,
		SharedModule,
		HttpClientJsonpModule,
		GoogleMapsModule,
	],
	providers: [],
})
export class CareerModule {}
