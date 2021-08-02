import { Pipe, PipeTransform } from '@angular/core';
import type { Career } from '@interface-agency/website-career-interface';

@Pipe({
	name: 'websiteCareerTypeFilter',
	pure: true,
})
export class CareerTypeFilterPipe implements PipeTransform {
	transform(list: Career[], filter: string, callback: (list: Career[]) => Career[]): Career[] {
		if (!list || !callback) return list;
		callback(list);
		if (!filter) return list;
		return list.filter((career) => career.role === filter);
	}
}
