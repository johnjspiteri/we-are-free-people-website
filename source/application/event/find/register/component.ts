import { Component, ViewEncapsulation } from '@angular/core';
import { faMobile } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'event-find-register',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class ArticleFindRegisterComponent {
	faMobile = faMobile;

	closeModal() {}
}
