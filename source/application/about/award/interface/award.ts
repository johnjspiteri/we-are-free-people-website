// import { Image } from '../../shared/interface/image';

export interface AboutAward {
    _id: string,
	// assets: {
	// 	images: [Image],
	// 	pdfs: []
	// },
	author: {
		name: string,
		department: string,
		image: {
			base64: string,
			type: string
		},
		role: string,
	},
	category: string,
	clean: string,
	content: string,
	date: {
		created: Date,
		updated: Date
	},
	description: string,
	// share: {
	// 	facebook: string,
	// 	linkedin: string,
	// 	twitter: string,
	// },
    tags: string[],
	title: string,
	topic: string
};
