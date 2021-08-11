import { Component, ViewEncapsulation } from '@angular/core';
import { faFingerprint } from '@fortawesome/pro-duotone-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
	selector: 'common-donate-complete',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class DonateCompleteComponent {
	public faFingerprint: IconProp = faFingerprint;
}
