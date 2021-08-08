import * as fromEventActions from '../store/actions';
import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import type { EventState, EventStore } from './interface';
import type { SearchOptions } from '_application/shared/interface/options';

const options: SearchOptions = {
	platform: {
		options: ['access', 'account', 'support'],
		map: {
			access: {
				options: ['groups', 'organization', 'products'],
				map: {
					groups: {
						options: ['administrators'],
						map: {
							administrators: {},
						},
					},
					organization: {
						options: ['owners'],
						map: {
							owners: {},
						},
					},
					products: {
						options: ['contributors', 'editors'],
						map: {
							contributors: {},
							editors: {},
						},
					},
				},
			},
			account: {
				options: ['billing'],
				map: {
					billing: {
						options: ['contract', 'invoices', 'payment', 'refund', 'suspension'],
						map: {
							contract: {},
							invoices: {},
							payment: {},
							refund: {},
							suspension: {},
						},
					},
				},
			},
			support: {
				options: ['channels'],
				map: {
					channels: {
						options: ['chat', 'email', 'options', 'phone', 'sms', 'whatsapp'],
						map: {
							chat: {},
							email: {},
							options: {},
							phone: {},
							sms: {},
							whatsapp: {},
						},
					},
				},
			},
		},
	},
	products: {
		options: ['domains', 'websites'],
		map: {
			domains: {
				options: ['migration', 'security', 'setup'],
				map: {
					migration: {
						options: ['transfer'],
						map: {
							transfer: {},
						},
					},
					security: {
						options: ['features'],
						map: {
							features: {},
						},
					},
					setup: {
						options: ['dns'],
						map: {
							dns: {},
						},
					},
				},
			},
			websites: {
				options: ['analytics', 'benefits', 'code', 'content', 'design', 'hosting'],
				map: {
					analytics: {
						options: ['setup'],
						map: {
							setup: {},
						},
					},
					benefits: {
						options: ['all-inclusive'],
						map: {
							'all-inclusive': {},
						},
					},
					code: {
						options: ['features', 'technology', 'updates'],
						map: {
							features: {},
							technology: {},
							updates: {},
						},
					},
					content: {
						options: ['images', 'video'],
						map: {
							images: {},
							video: {},
						},
					},
					design: {
						options: ['palettes', 'responsive', 'themes'],
						map: {
							palettes: {},
							responsive: {},
							themes: {},
						},
					},
					hosting: {
						options: ['administration', 'performance', 'security'],
						map: {
							administration: {},
							performance: {},
							security: {},
						},
					},
				},
			},
		},
	},
};

export const FEATURE_KEY = 'event';

const INITIAL_STATE: EventState = {
	area: {
		options: ['platform', 'products'],
		// options: [],
		selected: '',
	},
	category: {
		options: [],
		selected: '',
	},
	find: null,
	list: {
		processed: [],
		results: null,
	},
	section: {
		options: [],
		selected: '',
	},
	sort: {
		options: ['alphabetical', 'newest'],
		selected: '',
	},
	state: false,
	tag: {
		options: [],
		selected: [],
	},
	topic: {
		options: [],
		selected: '',
	},
	type: {
		options: [],
		selected: '',
	},
};

const _reducer = createReducer(
	INITIAL_STATE,
	on(fromEventActions.SETTING_SAVE, (state, { area, section, sections, category, categories, topic, topics }) => {
		return Object.assign({}, state, {
			area: {
				options: state.area.options,
				selected: area,
			},
			section: {
				options: sections,
				selected: section,
			},
			category: {
				options: categories,
				selected: category,
			},
			topic: {
				options: topics,
				selected: topic,
			},
		});
	}),
	on(fromEventActions.AREA_UPDATE, (state, { area }) => {
		return Object.assign({}, state, {
			area: {
				options: state.area.options,
				selected: area,
			},
			section: {
				options: options[area].options,
				selected: '',
			},
			category: {
				options: [],
				selected: '',
			},
			topic: {
				options: [],
				selected: '',
			},
		});
	}),
	on(fromEventActions.SECTION_UPDATE, (state, { section }) => {
		return Object.assign({}, state, {
			section: {
				options: state.section.options,
				selected: section,
			},
			category: {
				options: options[state.area.selected].map[section].options,
				selected: '',
			},
			topic: {
				options: [],
				selected: '',
			},
		});
	}),
	on(fromEventActions.CATEGORY_UPDATE, (state, { category }) => {
		return Object.assign({}, state, {
			category: {
				options: state.category.options,
				selected: category,
			},
			topic: {
				options: options[state.area.selected].map[state.section.selected].map[category].options,
				selected: '',
			},
		});
	}),
	on(fromEventActions.TOPIC_UPDATE, (state, { topic }) => {
		return Object.assign({}, state, {
			topic: {
				options: state.topic.options,
				selected: topic,
			},
		});
	}),
	on(fromEventActions.TAG_UPDATE, (state, { tag }) => {
		return Object.assign({}, state, {
			tag: {
				options: state.tag.options,
				selected: tag,
			},
		});
	}),
	on(fromEventActions.TYPE_UPDATE, (state, { kind }) => {
		return Object.assign({}, state, {
			type: {
				options: state.type.options,
				selected: kind,
			},
		});
	}),
	on(fromEventActions.SORT_UPDATE, (state, { sort }) => {
		return Object.assign({}, state, {
			sort: {
				options: state.sort.options,
				selected: sort,
			},
		});
	}),
	on(fromEventActions.FIND_SAVE, (state, { event }) => {
		return Object.assign({}, state, {
			find: event,
		});
	}),
	on(fromEventActions.LIST_SAVE, (state, { processed, results, tags, kinds }) => {
		let type = state.type.selected;
		if (kinds.length === 1) type = kinds[0];

		return Object.assign({}, state, {
			list: {
				processed: processed,
				results: results,
			},
			tag: {
				options: tags,
				selected: state.tag.selected,
			},
			type: {
				options: kinds,
				selected: type,
			},
		});
	}),
	on(fromEventActions.STATE_TOGGLE, (state, { value }) => {
		return {
			...state,
			state: value,
		};
	}),
	on(fromEventActions.RESET, () => {
		return INITIAL_STATE;
	})
);

export function REDUCER(state: EventStore | undefined, action: Action) {
	return combineReducers({
		[FEATURE_KEY]: _reducer,
	})(state, action);
}
