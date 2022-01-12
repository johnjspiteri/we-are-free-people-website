import { Pipe, PipeTransform } from '@angular/core';
import type { Article } from '@interface-agency/interfaces.website.article';

@Pipe({
	name: 'websiteArticleCategoryFilter',
	pure: true,
})
export class EventCategoryFilterPipe implements PipeTransform {
	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		return list.filter((event) => event.category === filter);
	}
}
