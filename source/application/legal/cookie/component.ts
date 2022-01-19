import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'website-company-cookie',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class RootComponent {
	privacyPolicyURL: string = 'https://storage.googleapis.com/storage.interfaceagency.com/website/legal/privacy-policy.pdf';

	constructor(private titleService: Title, private metaTagService: Meta) {}

	ngOnInit(): void {
		this.titleService.setTitle('Cookie Policy | The X-Studio');
		this.metaTagService.updateTag({ name: 'description', content: 'We are using web 3.0 to build a digital art marketplace of curated NFTS priced in Bitcoin but also able to accept other forms of value exchange.' });
	}
}
