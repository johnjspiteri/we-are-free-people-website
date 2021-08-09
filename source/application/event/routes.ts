import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './list/component';
import { EventListGuard } from './list/guard';

const routes: Routes = [
	{
		path: '',
		component: EventListComponent,
		canActivate: [EventListGuard],
		children: [
			{
				path: ':area',
				component: EventListComponent,
			},
			{
				path: ':area/:section',
				component: EventListComponent,
			},
			{
				path: ':area/:section/:category',
				component: EventListComponent,
			},
			{
				path: ':area/:section/:category/:topic',
				component: EventListComponent,
			},
		],
	},
	{
		path: ':area/:section/:category/:topic/:clean',
		loadChildren: async () => (await import('./find/module')).ArticleFindModule,
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EventRoutingModule {}
