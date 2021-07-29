import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutTeamMember } from '../interface';
import { faAt, faPhone } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'legal-about-team-list',
	templateUrl: './index.html',
	encapsulation: ViewEncapsulation.None,
})
export class AboutTeamListComponent implements OnInit {
	faPhone = faPhone;
	faAt = faAt;
	faLinkedin = faLinkedin;

	public members: AboutTeamMember[];

	constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.members = this.activatedRoute.snapshot.data.members;
	}

	// selectMember(name: string, role: string) {
	// 	this.router.navigate([role, name], { relativeTo: this.activatedRoute });
	// }
}
