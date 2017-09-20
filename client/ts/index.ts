import './index.less';
console.log('aa');
import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.ts';

platformBrowserDynamic().bootstrapModule(AppModule);
