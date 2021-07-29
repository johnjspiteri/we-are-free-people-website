export interface Career {
    _id: string,
	category: string,
	clean: string,
	date: Date,
	creator: {
		image: string,
		name: string,
		title: string
	},
	description: {
		small: string,
		large: string,
		summary : string,
	},
	file: object,
	images: {
		// thumb: Image,
		// detail: Image[]
	},
	medium: string,
	testimonial: {
		author: string,
		// image: Image,
		statement: string,
	},
	title: string
};
