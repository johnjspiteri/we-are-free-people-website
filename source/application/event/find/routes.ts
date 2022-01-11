import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFindComponent } from './component';
import { EventFindGuard } from './guard';

const routes: Routes = [
	{
		path: '',
		component: EventFindComponent,
		canActivate: [EventFindGuard],
		children: [
			{
				path: 'help',
				loadChildren: async () => (await import('./help/module')).EventFindHelpModule,
			},
			{
				path: 'register',
				loadChildren: async () => (await import('./register/module')).ArticleFindRegisterModule,
			},
		],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleFindRoutingModule {}
