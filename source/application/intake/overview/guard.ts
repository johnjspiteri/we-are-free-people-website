import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { LoginState } from './state';

@Injectable()
export class IntakeOverviewCanActivateGuard implements CanActivate {

	// private decodedToken = {
	// 	_id: '',
	// 	exp: 0,
	// 	iat: ''
	// };

    constructor(private router: Router) {}

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean | UrlTree {
		// let token = localStorage.getItem('interface_token');
		// if (token) {
		// 	this.decodedToken = JSON.parse(atob(token.split('.')[1]));
		// 	// Check if token is expired?
		// 	// this.decodedToken.exp = 1176517186;
		// 	if((this.decodedToken.exp * 1000) < Date.now()) {
		// 		localStorage.removeItem('interface_token');
		// 		return true;
		// 	}
		// 	return this.router.parseUrl('/v1/organization/list');
        // }
		return true;
    }
}
