import { Injectable } from '@angular/core';
import { IntakeState } from './interface';

@Injectable()

export class IntakeStateService {

	private state: IntakeState = {
		detail: {
			existing_counsel: {
				state: false,
				name: 'James Gauchi',
				firm: 'Gauchi & Sons',
				issue: 'He has a very depressing attitude, and stares at my wife for long periods of time.'
			},
			existing_proceeding: {
				state: true,
				case: {
					number: '#1784332',
					party: 'Patrick McGowan'
				}
			}
		},
		overview:
			'This guy said that he would sell me his 2002 Honda CRX for €10,000 and took my deposit, then he raised the price on me! When I disagreed, he kept my deposit.',
		personal: {
			name: {
				first: 'Emmanuel',
				last: 'Vella'
			},
			phone: {
				area_code: 356,
				number: 9998888
			},
			email: 'emmanuel@hotmail.com',
			preferred: 'Email'
		},
		state: {
			detail: false,
			overview: false,
			personal: false,
			sent: false
		}
	};

	constructor() {
	}

	// buildTeamList() {
	// 	this.state.teams = this.map[this.state.department.toLowerCase()];
	// }

	load(): void {
		// if(this.state.department === '') {
		// 	this.state.department = localStorage.getItem('ia_career_department') || '';
		// 	// this.buildTeamList();
		// }
		// if(this.state.team === '') this.state.team = localStorage.getItem('ia_career_team') || '';
		// return this.state;
	}

	get(): IntakeState {
		return this.state;
	}

	// set(payload: object, type: string): void {
	// 	this[type] = payload;
	// }

	// setDepartment(value: string): CareerSearchInterface {
	// 	this.state.department = value;
	// 	this.state.team = '';
	// 	localStorage.setItem('ia_career_team', this.state.team);
	// 	this.buildTeamList();
	// 	localStorage.setItem('ia_career_department', value);
	// 	return this.state;
	// }
	//
	// setTeam(value: string): void {
	// 	this.state.team = value;
	// 	localStorage.setItem('ia_career_team', this.state.team)
	// }
	//
	// reset(): void {
	// 	this.state.department = '';
	// 	this.state.team = '';
	// 	this.state.teams = [];
	// 	localStorage.removeItem('ia_career_department');
	// 	localStorage.removeItem('ia_career_team');
	// }
}
