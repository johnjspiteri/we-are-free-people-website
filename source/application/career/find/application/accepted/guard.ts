import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable()
export class CareerApplicationAcceptedGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate(): boolean | UrlTree {
		return this.router.getCurrentNavigation().extras.state ? true : this.router.parseUrl('../');
	}
}
