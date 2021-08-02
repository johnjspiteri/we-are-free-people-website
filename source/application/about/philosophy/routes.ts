import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhilosophyComponent } from '_application/about/philosophy/component';

const routes: Routes = [
	{
		path: '',
		component: PhilosophyComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PhilosophyRoutingModule {}
