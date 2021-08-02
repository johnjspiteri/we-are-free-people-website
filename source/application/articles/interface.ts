// import { Image } from '../shared/interface/image';

export interface Article {
	_id: string;
	category: string;
	clean: string;
	date: Date;
	creator: {
		// image: Image,
		name: string;
		title: string;
	};
	description: {
		small: string;
		large: string;
		summary: string;
	};
	file: object;
	images: {
		// thumb: Image,
		// detail: Image[]
	};
	medium: string;
	statement: {
		author: string;
		// image: Image,
		statement: string;
	};
	title: string;
}
