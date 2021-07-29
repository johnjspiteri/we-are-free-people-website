import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './component';
import { ErrorComponent } from './error/component';

const routes: Routes = [
	{
		path: '',
		component: RootComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./home/module').then((module) => module.HomeModule),
			},
			{
				path: 'about',
				loadChildren: () => import('./about/module').then((module) => module.AboutModule),
			},
			{
				path: 'articles',
				loadChildren: () => import('./articles/module').then((module) => module.ArticleModule),
			},
			{
				path: 'careers',
				loadChildren: () => import('./career/module').then((module) => module.CareerModule),
			},
			{
				path: 'contact',
				loadChildren: () => import('./contact/module').then((module) => module.ContactModule),
			},
			{
				path: 'free-consultation',
				loadChildren: () => import('./consultation/module').then((module) => module.ConsultationModule),
			},
			{
				path: 'intake',
				loadChildren: () => import('./intake/module').then((module) => module.IntakeModule),
			},
			{
				path: 'media',
				loadChildren: () => import('./media/module').then((module) => module.MediaModule),
			},
			{
				path: 'page-not-found',
				component: ErrorComponent,
			},
			{
				path: 'privacy-policy',
				loadChildren: () => import('./privacy/module').then((module) => module.PrivacyModule),
			},
			{
				path: 'terms-and-conditions',
				loadChildren: () => import('./terms/module').then((module) => module.TermsModule),
			},
			{
				path: '**',
				redirectTo: 'page-not-found',
			},
		],
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
