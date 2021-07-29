export interface IntakeState {
	detail: {
	    existing_counsel: {
	        state: boolean,
	        name: string,
	        firm: string,
	        issue: string
	    },
	    existing_proceeding: {
			state: boolean,
			case: {
				number: string,
				party: string
			}
		}
	},
    overview: string
    personal: {
        name: {
			first: string,
			last: string
		},
        phone: {
			area_code: Number,
			number: Number
		},
        email: string,
        preferred: string
    },
    state: {
		detail: boolean,
		overview: boolean,
		personal: boolean,
		sent: boolean
	}
};
