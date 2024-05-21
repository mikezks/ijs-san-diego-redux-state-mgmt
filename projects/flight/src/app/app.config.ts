import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { APP_ROUTES } from './app.routes';
import { provideRouterFeature } from './shared/+state/router.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES,
      withComponentInputBinding()
    ),
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    ),
    provideStore(),
    provideEffects(),
    provideRouterFeature()
  ]
};
