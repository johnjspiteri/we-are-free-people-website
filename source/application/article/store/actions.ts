import { createAction, props } from '@ngrx/store';
import type { Article } from '@interface-agency/interfaces.website.article';

// COMPOSITIONS
export const INITIALIZE = createAction('[Article] Initialize');
export const AREA_UPDATE = createAction('[Article] Area Update', props<{ area: string }>());
export const SECTION_UPDATE = createAction('[Article] Section Update', props<{ section: string }>());
export const CATEGORY_UPDATE = createAction('[Article] Category Update', props<{ category: string }>());
export const TOPIC_UPDATE = createAction('[Article] Topic Update', props<{ topic: string }>());
export const TAG_UPDATE = createAction('[Article] Tag Update', props<{ tag: string[] }>());
export const TYPE_UPDATE = createAction('[Article] Type Update', props<{ kind: string }>());
export const SORT_UPDATE = createAction('[Article] Sort Update', props<{ sort: string }>());
export const STATE_TOGGLE = createAction('[Article] State Toggle', props<{ value: boolean }>());
export const RESET = createAction('[Article] Reset');

// TASKS
export const SETTING_LOAD = createAction('[Article] Settings Load');

export const SETTING_SAVE = createAction(
	'[Article] Settings Save',
	props<{
		area: string;
		category: string;
		categories: string[];
		section: string;
		sections: string[];
		topic: string;
		topics: string[];
	}>()
);

export const FIND_LOAD = createAction('[Article] Find Load');

export const FIND_SAVE = createAction(
	'[Article] Find Save',
	props<{
		article: Article;
	}>()
);

export const LIST_LOAD = createAction('[Article] List Load');

export const LIST_RELOAD = createAction('[Article] List Reload');

export const LIST_SAVE = createAction(
	'[Article] List Save',
	props<{
		processed: Article[];
		results: Article[];
		tags: string[];
		kinds: string[];
	}>()
);

export const TYPE_FILTER = createAction('[Article] Type Filter', props<{ processed: Article[]; results: Article[] }>());
export const TAG_FILTER = createAction('[Article] Tag Filter', props<{ processed: Article[]; results: Article[] }>());
export const SORT = createAction('[Article] Sort', props<{ processed: Article[]; results: Article[] }>());

export const TYPE_POPULATE = createAction('[Article] Type Populate', props<{ processed: Article[]; results: Article[] }>());
export const TAG_POPULATE = createAction('[Article] Tag Populate', props<{ processed: Article[]; results: Article[]; types: string[] }>());

export const NAVIGATION = createAction('[Article] Navigation');
