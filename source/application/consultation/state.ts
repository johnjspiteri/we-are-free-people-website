import {Injectable} from '@angular/core';
import {Consultation} from './interface';

@Injectable()
export class ConsultationState {

	private state: Consultation;

	set(form: Consultation): void {
		this.state = form;
	}

	// test(): boolean {
	// return this.state.created ? true : false;
	// }
}
