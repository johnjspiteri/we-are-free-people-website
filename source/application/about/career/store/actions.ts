import { createAction, props } from '@ngrx/store';
import type { Career } from '@interface-agency/website-career-interface';

// COMPOSITIONS
export const INITIALIZE = createAction('[Career] Initialize');
export const DEPARTMENT_UPDATE = createAction('[Career] Department Update', props<{ department: string }>());
export const TEAM_UPDATE = createAction('[Career] Team Update', props<{ team: string }>());
export const CATEGORY_UPDATE = createAction('[Career] Category Update', props<{ category: string }>());
export const EXPERIENCE_UPDATE = createAction('[Career] Experience Update', props<{ experience: string }>());
export const SORT_UPDATE = createAction('[Career] Sort Update', props<{ sort: string }>());
export const TYPE_UPDATE = createAction('[Career] Type Update', props<{ kind: string }>());
export const OFFICE_UPDATE = createAction('[Career] Office Update', props<{ office: string[] }>());
export const STATE_TOGGLE = createAction('[Career] State Toggle', props<{ value: boolean }>());
export const RESET = createAction('[Career] Reset');

// TASKS
export const SETTING_LOAD = createAction('[Career] Settings Load');

export const SETTING_SAVE = createAction(
	'[Career] Settings Save',
	props<{
		department: string;
		team: string;
		teams: string[];
		category: string;
		categories: string[];
		experience: string;
		experiences: string[];
	}>()
);

export const FIND_LOAD = createAction('[Career] Find Load');

export const FIND_SAVE = createAction(
	'[Career] Find Save',
	props<{
		career: Career;
	}>()
);

export const LIST_LOAD = createAction('[Career] List Load');

export const LIST_RELOAD = createAction('[Career] List Reload');

export const LIST_SAVE = createAction(
	'[Career] List Save',
	props<{
		processed: Career[];
		results: Career[];
		kinds: string[];
		offices: string[];
	}>()
);

export const TYPE_FILTER = createAction('[Career] Type Filter', props<{ processed: Career[]; results: Career[] }>());
export const OFFICE_FILTER = createAction('[Career] Office Filter', props<{ processed: Career[]; results: Career[] }>());
export const SORT = createAction('[Career] Sort', props<{ processed: Career[]; results: Career[] }>());

export const TYPE_POPULATE = createAction('[Career] Type Populate', props<{ processed: Career[]; results: Career[] }>());
export const OFFICE_POPULATE = createAction('[Career] Office Populate', props<{ processed: Career[]; results: Career[]; kinds: string[] }>());

export const NAVIGATION = createAction('[Career] Navigation');
