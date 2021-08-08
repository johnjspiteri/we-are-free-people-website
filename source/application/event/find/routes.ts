import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFindComponent } from './component';
// import { ArticleFindGuard } from './guard';

const routes: Routes = [
	{
		path: '',
		component: EventFindComponent,
		// canActivate: [ArticleFindGuard],
		// children: [
		// 	{
		// 		path: 'help',
		// 		loadChildren: async () => (await import('./help/module')).ArticleFindHelpModule,
		// 	},
		// ],
	},
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ArticleFindRoutingModule {}
