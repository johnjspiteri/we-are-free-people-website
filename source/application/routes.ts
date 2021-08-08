import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/component';

const routes: Routes = [
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
		loadChildren: () => import('./article/module').then((module) => module.ArticleModule),
	},
	{
		path: 'contact',
		loadChildren: () => import('./contact/module').then((module) => module.ContactModule),
	},
	{
		path: 'donate',
		loadChildren: () => import('./donate/module').then((module) => module.DonateModule),
	},
	{
		path: 'legal',
		loadChildren: () => import('./legal/module').then((module) => module.LegalModule),
	},
	{
		path: 'media',
		loadChildren: () => import('./media/module').then((module) => module.MediaModule),
	},
	{
		path: 'videos',
		loadChildren: () => import('./video/module').then((module) => module.VideoModule),
	},
	{
		path: 'volunteer',
		loadChildren: () => import('./volunteer/module').then((module) => module.VolunteerModule),
	},
	{
		path: 'petition',
		loadChildren: () => import('./petition/module').then((module) => module.PetitionModule),
	},
	{
		path: 'page-not-found',
		component: ErrorComponent,
	},
	{
		path: '**',
		redirectTo: 'page-not-found',
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
