// @ts-nocheck
import './polyfills';
import { platformBrowser } from '@angular/platform-browser';
import { RootModule } from '_application/module';
import ngHmrAccept from './reload';

ngHmrAccept(module);

platformBrowser()
	.bootstrapModule(RootModule)
	.catch((err) => console.log(err));
