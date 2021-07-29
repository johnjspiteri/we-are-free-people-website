import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';
import { Media } from '../interface';

@Component({
	selector: 'legal-media-find',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class MediaFindComponent implements OnInit {
	faTimes = faTimes;
	public imageObject: Array<object> = [];
	public media: Media;

	constructor(private activatedRoute: ActivatedRoute, private domSanitizer: DomSanitizer) {}

	ngOnInit() {
		this.media = this.activatedRoute.snapshot.data.media;
		let entry = {
			image: './images/media/view/1.jpg',
			thumbImage: './images/media/view/1.jpg',
			// image: './assets/images/project/view/1.jpg',
			// thumbImage: './assets/images/project/view/1.jpg'
		};

		// entry.image = 'data:image/jpeg;base64,' + this.project.images.thumb.base64;
		// entry.thumbImage = 'data:image/jpeg;base64,' + this.project.images.thumb.base64;
		// entry.thumbImage = this.project.images.thumb.base64;
		this.imageObject.push(entry);
		this.imageObject.push(entry);
		this.imageObject.push(entry);
		// console.log('image:', this.imageObject);
		// console.log('project:', this.project.images.detail);
		// for(let i=0; i<this.project.images.detail.length; i++) {
		// }
		// console.log('project images:', this.imageObject[0]);
	}

	composeBase64Image(base64String: string, fileType: string) {
		return 'data:image/' + fileType + ';base64,' + (this.domSanitizer.bypassSecurityTrustResourceUrl(base64String) as any).changingThisBreaksApplicationSecurity;
	}
}
