import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { StoreModule } from '@ngrx/store';
// import { StoreRouterConnectingModule } from '@ngrx/router-store';
// import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { metaReducers, ROOT_REDUCERS } from './store';
// import { PanelEffects } from '_application/store/panel/effects';

import { RootComponent } from './component';
import { FooterComponent } from './common/footer/component';
import { HeaderComponent } from './common/header/component';
import { RootRoutingModule } from './routes';
import { SharedModule } from './shared/module';

@NgModule({
	declarations: [RootComponent, HeaderComponent, FooterComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		HttpClientModule,
		// StoreModule.forRoot(ROOT_REDUCERS, {
		// 	metaReducers,
		// 	runtimeChecks: {
		// 		strictStateSerializability: true,
		// 		strictActionSerializability: true,
		// 		strictActionWithinNgZone: true,
		// 		strictActionTypeUniqueness: true,
		// 	},
		// }),
		// EffectsModule.forRoot([PanelEffects]),
		// StoreRouterConnectingModule.forRoot({
		// 	stateKey: 'route',
		// 	// routerState: 1,
		// }),
		RootRoutingModule,
		// StoreDevtoolsModule.instrument({
		// 	name: 'Interface Agency Application',
		// 	maxAge: 25, // Retains last 25 states
		// 	// logOnly: environment.production, // Restrict extension to log-only mode
		// }),
		RouterModule,
	],
	bootstrap: [RootComponent],
	exports: [],
})
export class RootModule {}
