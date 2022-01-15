import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/module';
import { RoutingModule } from './routes';

@NgModule({
	imports: [SharedModule, RoutingModule],
})
export class LegalModule {}
