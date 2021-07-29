import {Pipe, PipeTransform} from '@angular/core';
import {Media} from '../../../interface';

@Pipe({
	name: 'categoryFilter',
	pure: true
})

export class CategoryFilterPipe implements PipeTransform {

	transform(list: Media[], filter?: string): Media[] {
		if (!filter) return list;
		return list.filter(project => project.category === filter);
	}
}
