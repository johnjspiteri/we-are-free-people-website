import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: async () => (await import('./home/module')).HomeModule,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			// enableTracing: true
			// preloadingStrategy: PreloadAllModules,
			// scrollPositionRestoration: 'top',
		}),
	],
	exports: [RouterModule],
	providers: [],
})
export class RootRoutingModule {}
