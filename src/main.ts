import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//метод, который что-то запускает
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
