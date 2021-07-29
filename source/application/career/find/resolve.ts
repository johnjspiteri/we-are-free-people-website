import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Career } from '../interface';
import { CareerFindService } from './service';

@Injectable({
    providedIn: 'root'
})

export class CareerFindResolve implements Resolve<Career> {

    constructor(private careerFindService: CareerFindService) {}

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
        return this.careerFindService.get(activatedRouteSnapshot.params.career_department, activatedRouteSnapshot.params.career_role)
			.then((response: Career) => {
				return response;
			});
	}
}
