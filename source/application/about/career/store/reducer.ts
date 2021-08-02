import * as fromCareerActions from '../store/actions';
import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import type { CareerState, CareerStore } from './interface';
import type { SearchOptions } from '_application/shared/interface/options';

const options: SearchOptions = {
	marketing: {
		options: ['campaign', 'operations', 'research'],
		map: {
			campaign: {
				options: ['content', 'copywriter', 'email', 'paid', 'seo'],
				map: {
					content: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					copywriter: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					email: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					paid: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					seo: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			operation: {
				options: ['management', 'strategy'],
				map: {
					management: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					strategy: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			research: {
				options: ['analytics', 'feedback'],
				map: {
					analytics: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					feedback: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
	product: {
		options: ['design', 'development', 'programming'],
		map: {
			design: {
				options: ['graphic', 'user-experience', 'user-interface'],
				map: {
					graphic: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					'user-experience': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					'user-interface': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			development: {
				options: ['domains', 'email', 'marketing', 'websites'],
				map: {
					domains: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					email: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					marketing: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					websites: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			programming: {
				options: ['back-end', 'database', 'deployment', 'front-end'],
				map: {
					'back-end': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					database: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					deployment: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					'front-end': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
	sales: {
		options: ['enablement', 'operation', 'representative'],
		map: {
			enablement: {
				options: ['analytics', 'onboarding'],
				map: {
					analytics: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					onboarding: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			operation: {
				options: ['management', 'strategy'],
				map: {
					management: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					strategy: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			representative: {
				options: ['call-center', 'field'],
				map: {
					'call-center': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					field: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
	support: {
		options: ['operation', 'representative'],
		map: {
			operation: {
				options: ['management', 'strategy'],
				map: {
					management: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					strategy: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
			representative: {
				options: ['call-center', 'digital'],
				map: {
					'call-center': {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
					digital: {
						options: ['junior', 'senior'],
						map: {
							junior: {},
							senior: {},
						},
					},
				},
			},
		},
	},
};

export const FEATURE_KEY = 'career';

const INITIAL_STATE: CareerState = {
	department: {
		options: ['marketing', 'product', 'sales', 'support'],
		// options: [],
		selected: '',
	},
	team: {
		options: [],
		selected: '',
	},
	category: {
		options: [],
		selected: '',
	},
	experience: {
		options: [],
		selected: '',
	},
	find: null,
	list: {
		processed: [],
		results: null,
	},
	sort: {
		options: ['alphabetical', 'newest'],
		selected: '',
	},
	type: {
		options: [],
		selected: '',
	},
	state: false,
	office: {
		options: [],
		selected: '',
	},
};

const _reducer = createReducer(
	INITIAL_STATE,
	on(fromCareerActions.SETTING_SAVE, (state, { department, team, teams, category, categories, experience, experiences }) => {
		return Object.assign({}, state, {
			department: {
				options: state.department.options,
				selected: department,
			},
			team: {
				options: teams,
				selected: team,
			},
			category: {
				options: categories,
				selected: category,
			},
			experience: {
				options: experiences,
				selected: experience,
			},
		});
	}),
	on(fromCareerActions.DEPARTMENT_UPDATE, (state, { department }) => {
		console.log('dept update:', department);
		return Object.assign({}, state, {
			department: {
				options: state.department.options,
				selected: department,
			},
			team: {
				options: options[department].options,
				selected: '',
			},
			category: {
				options: [],
				selected: '',
			},
			experience: {
				options: [],
				selected: '',
			},
		});
	}),
	on(fromCareerActions.TEAM_UPDATE, (state, { team }) => {
		return Object.assign({}, state, {
			team: {
				options: state.team.options,
				selected: team,
			},
			category: {
				options: options[state.department.selected].map[team].options,
				selected: '',
			},
			experience: {
				options: [],
				selected: '',
			},
		});
	}),
	on(fromCareerActions.CATEGORY_UPDATE, (state, { category }) => {
		return Object.assign({}, state, {
			category: {
				options: state.category.options,
				selected: category,
			},
			experience: {
				options: options[state.department.selected].map[state.team.selected].map[category].options,
				selected: '',
			},
		});
	}),
	on(fromCareerActions.EXPERIENCE_UPDATE, (state, { experience }) => {
		return Object.assign({}, state, {
			experience: {
				options: state.experience.options,
				selected: experience,
			},
		});
	}),
	on(fromCareerActions.OFFICE_UPDATE, (state, { office }) => {
		return Object.assign({}, state, {
			office: {
				options: state.office.options,
				selected: office,
			},
		});
	}),
	on(fromCareerActions.TYPE_UPDATE, (state, { kind }) => {
		return Object.assign({}, state, {
			type: {
				options: state.type.options,
				selected: kind,
			},
		});
	}),
	on(fromCareerActions.SORT_UPDATE, (state, { sort }) => {
		return Object.assign({}, state, {
			sort: {
				options: state.sort.options,
				selected: sort,
			},
		});
	}),
	on(fromCareerActions.LIST_SAVE, (state, { processed, results, kinds, offices }) => {
		// let type = state.type.selected;
		// if (kinds.length === 1) type = kinds[0];

		return Object.assign({}, state, {
			list: {
				processed: processed,
				results: results,
			},
			type: {
				options: kinds,
				selected: state.type.selected,
			},
			office: {
				options: offices,
				selected: state.office.selected,
			},
		});
	}),
	on(fromCareerActions.FIND_SAVE, (state, { career }) => {
		return Object.assign({}, state, {
			find: career,
		});
	}),
	on(fromCareerActions.STATE_TOGGLE, (state, { value }) => {
		return {
			...state,
			state: value,
		};
	}),
	on(fromCareerActions.RESET, () => {
		return INITIAL_STATE;
	})
);

export function REDUCER(state: CareerStore | undefined, action: Action) {
	return combineReducers({
		[FEATURE_KEY]: _reducer,
	})(state, action);
}
