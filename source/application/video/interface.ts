export interface Video {
	area: string;
	assets: {
		files: string[];
		images: string[];
		link: string;
		pdfs: string[];
		thumb: string;
		video: string[];
	};
	author: {
		department: string;
		image: string;
		name: {
			first: string;
			last: string;
		};
		role: string;
		social: {
			facebook: string;
			linkedin: string;
			twitter: string;
		};
	};
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
	url: string;
	updated: Date;
}

export interface VideoListRequest {
	area?: string;
	category?: string;
	section?: string;
	topic?: string;
	tags?: {
		$in: string[];
	};
}
