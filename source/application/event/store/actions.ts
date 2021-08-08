import { createAction, props } from '@ngrx/store';
import type { Event } from './../interface';

// COMPOSITIONS
export const INITIALIZE = createAction('[Event] Initialize');
export const AREA_UPDATE = createAction('[Event] Area Update', props<{ area: string }>());
export const SECTION_UPDATE = createAction('[Event] Section Update', props<{ section: string }>());
export const CATEGORY_UPDATE = createAction('[Event] Category Update', props<{ category: string }>());
export const TOPIC_UPDATE = createAction('[Event] Topic Update', props<{ topic: string }>());
export const TAG_UPDATE = createAction('[Event] Tag Update', props<{ tag: string[] }>());
export const TYPE_UPDATE = createAction('[Event] Type Update', props<{ kind: string }>());
export const SORT_UPDATE = createAction('[Event] Sort Update', props<{ sort: string }>());
export const STATE_TOGGLE = createAction('[Event] State Toggle', props<{ value: boolean }>());
export const RESET = createAction('[Event] Reset');

// TASKS
export const SETTING_LOAD = createAction('[Event] Settings Load');

export const SETTING_SAVE = createAction(
	'[Event] Settings Save',
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

export const FIND_LOAD = createAction('[Event] Find Load');

export const FIND_SAVE = createAction(
	'[Event] Find Save',
	props<{
		event: Event;
	}>()
);

export const LIST_LOAD = createAction('[Event] List Load');

export const LIST_RELOAD = createAction('[Event] List Reload');

export const LIST_SAVE = createAction(
	'[Event] List Save',
	props<{
		processed: Event[];
		results: Event[];
		tags: string[];
		kinds: string[];
	}>()
);

export const TYPE_FILTER = createAction('[Event] Type Filter', props<{ processed: Event[]; results: Event[] }>());
export const TAG_FILTER = createAction('[Event] Tag Filter', props<{ processed: Event[]; results: Event[] }>());
export const SORT = createAction('[Event] Sort', props<{ processed: Event[]; results: Event[] }>());

export const TYPE_POPULATE = createAction('[Event] Type Populate', props<{ processed: Event[]; results: Event[] }>());
export const TAG_POPULATE = createAction('[Event] Tag Populate', props<{ processed: Event[]; results: Event[]; types: string[] }>());

export const NAVIGATION = createAction('[Event] Navigation');
