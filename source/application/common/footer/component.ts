import { Component, Renderer2, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { faFacebookF, faTwitter, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faCaretDown, faGlobeAmericas, faLanguage, faDollarSign, faEuroSign, faYenSign, faLocationArrow, faMailbox, faMobile } from '@fortawesome/pro-solid-svg-icons';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

@Component({
	selector: 'website-footer',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
	private renderer: Renderer2;
	public faCaretDown: IconProp = faCaretDown;
	public faFacebookF: IconProp = faFacebookF;
	public faLocationArrow: IconProp = faLocationArrow;
	public faInstagramSquare: IconProp = faInstagramSquare;
	public faMobile: IconProp = faMobile;
	public faMailbox: IconProp = faMailbox;
	public faTwitter: IconProp = faTwitter;
	public faDollarSign: IconProp = faDollarSign;
	public faYenSign: IconProp = faYenSign;
	public faEuroSign: IconProp = faEuroSign;
	// public faLinkedinIn = faLinkedinIn;
	// public faMapMarker = faMapMarker;
	public faGlobeEurope: IconProp = faGlobeEurope;
	public faGlobeAmericas: IconProp = faGlobeAmericas;
	public faLanguage: IconProp = faLanguage;
	public faTimes: IconProp = faTimes;

	public state = {
		region: false,
	};

	constructor(private rendererFactory: RendererFactory2) {
		this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	public openRegionPanel(): void {
		this.renderer.addClass(document.body, 'locked');
		this.state.region = true;
	}

	public closeRegionPanel(): void {
		this.renderer.removeClass(document.body, 'locked');
		this.state.region = false;
	}
}
