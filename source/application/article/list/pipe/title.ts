import { Pipe, PipeTransform } from '@angular/core';
import type { Article } from '@interface-agency/interfaces.website.article';

@Pipe({
	name: 'websiteArticleTitleFilter',
	pure: true,
})
export class ArticleTitleFilterPipe implements PipeTransform {
	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		return list.filter((article) => article.title.includes(filter));
	}
}
