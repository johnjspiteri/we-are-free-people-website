import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../../interface';

@Pipe({
	name: 'textFilter',
	pure: true,
})
export class TextFilterPipe implements PipeTransform {
	transform(list: Media[], filter?: string): Media[] {
		if (!filter) return list;
		return list.filter((project) => project.title.includes(filter));
	}
}
