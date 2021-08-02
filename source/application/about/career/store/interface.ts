import type { Career } from '@interface-agency/website-career-interface';

export interface CareerStore {
	career: CareerState;
}

export interface CareerState {
	department: {
		options: string[];
		selected: string;
	};
	team: {
		options: string[];
		selected: string;
	};
	category: {
		options: string[];
		selected: string;
	};
	experience: {
		options: string[];
		selected: string;
	};
	find: Career;
	list: {
		processed: Career[];
		results: Career[];
	};
	sort: {
		options: string[];
		selected: string;
	};
	type: {
		options: string[];
		selected: string;
	};
	office: {
		options: string[];
		selected: string;
	};
	state: boolean;
}
