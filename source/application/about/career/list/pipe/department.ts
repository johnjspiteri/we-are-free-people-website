import { Pipe, PipeTransform } from '@angular/core';
import type { Career } from '@interface-agency/website-career-interface';

@Pipe({
	name: 'websiteCareerDepartmentFilter',
	pure: true,
})
export class CareerDepartmentFilterPipe implements PipeTransform {
	transform(list: Career[], filter?: string): Career[] {
		if (!filter) return list;
		return list.filter((career) => career.department === filter);
	}
}
