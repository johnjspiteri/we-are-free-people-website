// interface CareerListOptionsLocation {
// 	city: string,
// 	country: string
// }

interface CareerListOptionsDepartment {
	[key: string]: {
		teams: string[];
		team: {
			[key: string]: {
				roles: string[];
			};
		};
	};
}

export interface CareerListOptions {
	departments: string[];
	department: CareerListOptionsDepartment;
	sort_options: string[];
}
