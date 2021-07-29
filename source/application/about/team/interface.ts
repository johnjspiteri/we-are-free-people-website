// import { Image } from '../../shared/interface/image';

export interface AboutTeamMember {
    _id: string,
	background: {
		associations: [string],
		education: [string],
		information: [string],
		practice_areas: [string],
		pro_bono: []
	},
	clean: {
		name: string,
		role: string
	},
	contact: {
		email: string,
		mobile: {
			area_code: Number,
			number: string
		},
		phone: {
			area_code: Number,
			number: string
		},
		social: {
			facebook: string,
			instagram: string,
			linkedin: string,
			twitter: string
		}
	},
	description: string,
	designation: string,
	location: {
		city: string,
		state: string,
		country: string
	},
	name: {
		first: string,
		last: string
	},
	quote: string,
	picture: {
		base64: string,
		type: string
	},
	role: string,
	share: {
		facebook: string,
		linkedin: string,
		twitter: string
	}
}
