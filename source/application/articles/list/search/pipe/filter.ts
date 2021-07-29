import {Pipe, PipeTransform} from '@angular/core';
import {Article} from '../../../interface';

@Pipe({
	name: 'textFilter',
	pure: true
})

export class TextFilterPipe implements PipeTransform {

	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		return list.filter(project => project.title.includes(filter));
	}
}
