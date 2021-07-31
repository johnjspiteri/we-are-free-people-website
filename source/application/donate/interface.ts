export interface Consultation {
	contact_method: string,
	created: Date,
	description: string,
	email: string,
	name: {
		first: string,
		last: string
	},
	phone: {
		area_code: string,
		number: string
	}
};
