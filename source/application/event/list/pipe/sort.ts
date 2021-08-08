import { Pipe, PipeTransform } from '@angular/core';
import type { Article } from '@interface-agency/website-article-interface';

@Pipe({
	name: 'websiteArticleSortFilter',
	pure: true,
})
export class EventSortFilterPipe implements PipeTransform {
	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		if (filter === 'Alphabetical') {
			return list.sort((a, b) => (a.title > b.title ? 1 : -1));
		} else if (filter === 'Newest') {
			return list.sort((a, b) => (a.updated < b.updated ? 1 : -1));
		}
		return list;
	}
}
