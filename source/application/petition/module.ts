import { NgModule } from '@angular/core';
import { petitionRoutingModule } from './routes';

import { PetitionComponent } from './component';
import { PetitionJoinComponent } from './join/component';
import { PetitionCompleteComponent } from './complete/component';

@NgModule({
	declarations: [PetitionComponent, PetitionJoinComponent, PetitionCompleteComponent],
	entryComponents: [],
	imports: [petitionRoutingModule],
	exports: [],
})
export class PetitionModule {}
