import { createAction, props } from '@ngrx/store';
import type { Video } from './../interface';

// COMPOSITIONS
export const INITIALIZE = createAction('[Video] Initialize');
export const AREA_UPDATE = createAction('[Video] Area Update', props<{ area: string }>());
export const SECTION_UPDATE = createAction('[Video] Section Update', props<{ section: string }>());
export const CATEGORY_UPDATE = createAction('[Video] Category Update', props<{ category: string }>());
export const TOPIC_UPDATE = createAction('[Video] Topic Update', props<{ topic: string }>());
export const TAG_UPDATE = createAction('[Video] Tag Update', props<{ tag: string[] }>());
export const TYPE_UPDATE = createAction('[Video] Type Update', props<{ kind: string }>());
export const SORT_UPDATE = createAction('[Video] Sort Update', props<{ sort: string }>());
export const STATE_TOGGLE = createAction('[Video] State Toggle', props<{ value: boolean }>());
export const RESET = createAction('[Video] Reset');

// TASKS
export const SETTING_LOAD = createAction('[Video] Settings Load');

export const SETTING_SAVE = createAction(
	'[Video] Settings Save',
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

export const FIND_LOAD = createAction('[Video] Find Load');

export const FIND_SAVE = createAction(
	'[Video] Find Save',
	props<{
		video: Video;
	}>()
);

export const LIST_LOAD = createAction('[Video] List Load');

export const LIST_RELOAD = createAction('[Video] List Reload');

export const LIST_SAVE = createAction(
	'[Video] List Save',
	props<{
		processed: Video[];
		results: Video[];
		tags: string[];
		kinds: string[];
	}>()
);

export const TYPE_FILTER = createAction('[Video] Type Filter', props<{ processed: Video[]; results: Video[] }>());
export const TAG_FILTER = createAction('[Video] Tag Filter', props<{ processed: Video[]; results: Video[] }>());
export const SORT = createAction('[Video] Sort', props<{ processed: Video[]; results: Video[] }>());

export const TYPE_POPULATE = createAction('[Video] Type Populate', props<{ processed: Video[]; results: Video[] }>());
export const TAG_POPULATE = createAction('[Video] Tag Populate', props<{ processed: Video[]; results: Video[]; types: string[] }>());

export const NAVIGATION = createAction('[Video] Navigation');
