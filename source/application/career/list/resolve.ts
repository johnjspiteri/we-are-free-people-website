import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Career } from '../interface';
import { CareerListService } from './service';

@Injectable({
    providedIn: 'root'
})

export class CareerListResolve implements Resolve<Career[]> {

    constructor(private careerListService: CareerListService) {}

    resolve() {
        return this.careerListService.get()
			.then((response: Career[]) => {
				return response;
			});
	}
}
