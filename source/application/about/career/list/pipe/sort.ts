import { Pipe, PipeTransform } from '@angular/core';
import type { Career } from '@interface-agency/website-career-interface';

@Pipe({
	name: 'websiteCareerSortFilter',
	pure: true,
})
export class CareerSortFilterPipe implements PipeTransform {
	transform(list: Career[], filter?: string): Career[] {
		if (!filter) return list;
		if (filter === 'Alphabetical') {
			return list.sort((a, b) => (a.role > b.role ? 1 : -1));
		} else if (filter === 'Newest') {
			return list.sort((a, b) => (a.start_date < b.start_date ? 1 : -1));
		}
		return list;
	}
}
