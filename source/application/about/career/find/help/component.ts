import { Component, ViewEncapsulation } from '@angular/core';
import { faMobile } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'website-about-career-find-help',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class CareerFindHelpComponent {
	faMobile = faMobile;

  closeModal() {}
}
