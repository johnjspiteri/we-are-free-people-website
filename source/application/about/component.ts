import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'about',
	template: `<router-outlet></router-outlet>`,
	encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {}
