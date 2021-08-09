import { Component, ViewEncapsulation } from '@angular/core';
import { faMobile } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'website-event-find-help',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class EventFindHelpComponent {
	faMobile = faMobile;

	closeModal() {}
}
