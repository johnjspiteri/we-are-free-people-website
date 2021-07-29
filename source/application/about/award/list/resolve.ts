import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AboutAward } from '../interface/award';
import { AboutAwardListService } from './service';

@Injectable({
    providedIn: 'root'
})

export class AboutAwardListResolve implements Resolve<AboutAward[]> {

    constructor(private aboutAwardListService: AboutAwardListService) {}

    resolve() {
        return this.aboutAwardListService.get()
			.then((response: AboutAward[]) => {
				return response;
			});
	}
}
