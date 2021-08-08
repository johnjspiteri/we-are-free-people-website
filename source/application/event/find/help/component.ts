import { Component, ViewEncapsulation } from '@angular/core';
import { faMobile } from '@fortawesome/pro-solid-svg-icons';

@Component({
	selector: 'website-article-find-help',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class ArticleFindHelpComponent {
	faMobile = faMobile;

	closeModal() {}
}
