import { Component, ViewEncapsulation } from '@angular/core';
import { faMobile } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'event-find-help',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class VideoFindHelpComponent {
	faMobile = faMobile;

	closeModal() {}
}
