import { Pipe, PipeTransform } from '@angular/core';
import type { Article } from '@interface-agency/interfaces.website.article';

@Pipe({
	name: 'websiteArticleTopicFilter',
	pure: true,
})
export class ArticleTopicFilterPipe implements PipeTransform {
	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		return list.filter((article) => article.topic === filter);
	}
}
