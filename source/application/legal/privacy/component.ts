import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'website-company-privacy',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class RootComponent {
	constructor(private titleService: Title, private metaTagService: Meta) {}

	privacyPolicyURL: string = 'https://storage.googleapis.com/storage.thexstudio.io/website/pdf/xstudio-privacy-policy.pdf';
	ngOnInit(): void {
		this.titleService.setTitle('Privacy Policy | The X-Studio');
		this.metaTagService.updateTag({ name: 'description', content: 'We are using web 3.0 to build a digital art marketplace of curated NFTS priced in Bitcoin but also able to accept other forms of value exchange.' });
	}
}
