import {Pipe, PipeTransform} from '@angular/core';
import {Article} from '../../../interface';

@Pipe({
	name: 'categoryFilter',
	pure: true
})

export class CategoryFilterPipe implements PipeTransform {

	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		return list.filter(project => project.category === filter);
	}
}
