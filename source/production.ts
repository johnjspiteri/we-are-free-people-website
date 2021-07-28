import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { RootModule } from './application/module';

enableProdMode();

platformBrowser()
	.bootstrapModule(RootModule)
	.catch((err) => console.log(err));
