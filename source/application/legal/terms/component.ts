import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
	selector: 'website-company-terms',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class RootComponent {
	constructor(private titleService: Title, private metaTagService: Meta) {}

	termsAndConditionsURL: string = 'https://storage.googleapis.com/storage.thexstudio.io/website/pdf/terms.pdf';

	ngOnInit(): void {
		this.titleService.setTitle('Terms of Service | The X-Studio');
		this.metaTagService.updateTag({ name: 'description', content: 'We are using web 3.0 to build a digital art marketplace of curated NFTS priced in Bitcoin but also able to accept other forms of value exchange.' });
	}
}
