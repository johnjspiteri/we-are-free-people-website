export interface Media {
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
		thumb: string,
		detail: string[]
	},
	medium: string,
	testimonial: {
		author: string,
		image: string,
		statement: string,
	},
	title: string
};
