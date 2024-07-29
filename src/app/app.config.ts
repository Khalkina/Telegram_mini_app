import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//объект, который регистриует routes
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
