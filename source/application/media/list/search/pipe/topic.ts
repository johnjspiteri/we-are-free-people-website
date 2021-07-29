import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../../interface';

@Pipe({
	name: 'subCategoryFilter',
	pure: true,
})
export class SubCategoryFilterPipe implements PipeTransform {
	transform(list: Media[], filter?: string): Media[] {
		if (!filter) return list;
		return list.filter((project) => project.medium === filter);
	}
}
