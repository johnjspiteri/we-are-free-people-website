import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutTeamMember } from '../interface';
import { faAt, faPhone } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'legal-about-team-find',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class AboutTeamFindComponent implements OnInit {
	faPhone = faPhone;
	faAt = faAt;
	faLinkedin = faLinkedin;

	public member: AboutTeamMember[];

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.member = this.activatedRoute.snapshot.data.member;
	}
}
