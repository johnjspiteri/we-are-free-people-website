import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
	name: 'composeBase64ImagePipe',
})
export class ComposeBase64ImagePipe implements PipeTransform {
	constructor(public domSanitizer: DomSanitizer) {}

	transform(thumb: any): string {
		return 'data:image/' + thumb.file_type + ';base64,' + (this.domSanitizer.bypassSecurityTrustResourceUrl(thumb.base64) as any).changingThisBreaksApplicationSecurity;
	}
}
