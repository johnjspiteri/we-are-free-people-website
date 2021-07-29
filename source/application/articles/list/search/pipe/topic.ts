import {Pipe, PipeTransform} from '@angular/core';
import {Article} from '../../../interface';

@Pipe({
	name: 'topicFilter',
	pure: true
})

export class TopicFilterPipe implements PipeTransform {

	transform(list: Article[], filter?: string): Article[] {
		if (!filter) return list;
		return list.filter(project => project.medium === filter);
	}
}
