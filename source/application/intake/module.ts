import { NgModule } from '@angular/core';
import { Intake } from './component';
import { IntakeDetail } from './detail/component';
import { IntakeOverview } from './overview/component';
import { IntakePersonal } from './personal/component';
import { IntakeRoutingModule } from './routes';
import { IntakeSent } from './sent/component';
import { IntakeStateService } from './state';

@NgModule({
	declarations: [Intake, IntakePersonal, IntakeDetail, IntakeOverview, IntakeSent],
	entryComponents: [],
	imports: [IntakeRoutingModule],
	exports: [],
	providers: [IntakeStateService],
})
export class IntakeModule {}
