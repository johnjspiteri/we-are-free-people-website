import { Component, ViewEncapsulation } from '@angular/core';
import { faCheck, faCaretDown } from '@fortawesome/pro-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'legal-donate',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class donateComponent {
	public faCheck: IconProp = faCheck;
	public faCaretDown: IconProp = faCaretDown;
}
