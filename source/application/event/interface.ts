export interface Event {
	area: string;
	assets: {
		files: string[];
		images: string[];
		link: string;
		pdfs: string[];
		thumb: string;
		video: string[];
	};
	attendees: string[];
	category: string;
	clean: string;
	content: {
		body: string;
		conclusion: string;
		introduction: string;
		quote: string;
		summary: string;
		tldr: string;
	};
	created: Date;
	date: {
		end: Date;
		start: Date;
	};
	location: {
		address: string;
		city: string;
		country: string;
		coordinates: {
			latitude: number;
			longitude: number;
		};
		postal_code: string;
		province: string;
		state: string;
		zip: number;
	};
	section: string;
	share: {
		facebook: string;
		linkedin: string;
		twitter: string;
	};
	tags: string[];
	title: string;
	topic: string;
	type: string;
	updated: Date;
}

export interface EventListRequest {
	area?: string;
	category?: string;
	section?: string;
	topic?: string;
	tags?: {
		$in: string[];
	};
}
