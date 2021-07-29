import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';

import {ConsultationState} from '../state';

@Injectable({
	providedIn: 'root'
})

export class ConsultationConfirmationCanActivateGuard implements CanActivate {

	constructor(private consultationState: ConsultationState, private router: Router) {
	}

	canActivate(): boolean | UrlTree {
		// if(this.consultationState.test()) {
		// 	return true;
		// } else {
		// 	return this.router.parseUrl('/free-consultation');
		// }
		return true;
	}
}
