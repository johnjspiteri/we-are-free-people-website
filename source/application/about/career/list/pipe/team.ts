import { Pipe, PipeTransform } from '@angular/core';
import type { Career } from '@interface-agency/website-career-interface';

@Pipe({
	name: 'websiteCareerTeamFilter',
	pure: true,
})
export class CareerTeamFilterPipe implements PipeTransform {
	transform(list: Career[], filter?: string): Career[] {
		if (!filter) return list;
		return list.filter((career) => career.team === filter);
	}
}
