import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ProjetComponent } from './projet/projet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    ExperienceComponent,
    FormationComponent,
    ProjetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
