import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'cookies-policy',
		pathMatch: 'full',
	},
	{
		path: 'cookies-policy',
		loadChildren: async () => (await import('./cookie/module')).Module,
	},
	{
		path: 'privacy-policy',
		loadChildren: async () => (await import('./privacy/module')).Module,
	},
	{
		path: 'terms-and-conditions',
		loadChildren: async () => (await import('./terms/module')).Module,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RoutingModule {}
