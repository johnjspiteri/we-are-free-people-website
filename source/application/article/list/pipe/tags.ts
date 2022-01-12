import { Pipe, PipeTransform } from '@angular/core';
import type { Article } from '@interface-agency/interfaces.website.article';

@Pipe({
	name: 'websiteArticleTagsFilter',
	pure: true,
})
export class ArticleTagsFilterPipe implements PipeTransform {
	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		// if(filter === 'Alphabetical') {
		// 	return list.sort((a, b) => (a.position.role > b.position.role) ? 1 : -1);
		// } else if (filter === 'Newest') {
		// 	return list.sort((a, b) => (a.position.start_date < b.position.start_date) ? 1 : -1)
		// }
		return list;
	}
}
