import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Obtain this config from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDu2uyAMQ9eGYUpUZU4jYmqMoAkk3BDUtA",
  authDomain: "ritividhi-web.firebaseapp.com",
  projectId: "ritividhi-web",
  storageBucket: "ritividhi-web.firebasestorage.app",
  messagingSenderId: "162002115755",
  appId: "1:162002115755:web:4f397e5a66075f03e9ebee",
  measurementId: "G-P7XB9K1WFP",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(()  => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]),
  ],
};
