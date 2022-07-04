import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationItemsComponent } from './components/education/education-items/education-items.component';
import { ProjectsItemsComponent } from './components/projects/projects-items/projects-items.component';
import { ExperienceItemsComponent } from './components/experience/experience-items/experience-items.component';
import { SkillsItemsComponent } from './components/skills/skills-items/skills-items.component';
import { AddEducationComponent } from './components/education/add-education/add-education.component';
import { AddExperienceComponent } from './components/experience/add-experience/add-experience.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { AddSkillComponent } from './components/skills/add-skill/add-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationItemsComponent,
    ProjectsItemsComponent,
    ExperienceItemsComponent,
    SkillsItemsComponent,
    AddEducationComponent,
    AddExperienceComponent,
    AddProjectComponent,
    AddSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    NgCircleProgressModule.forRoot({
      radius: 100,
      animation: false,
      showUnits: false,
      clockwise: false,
      outerStrokeWidth: 10,
      innerStrokeWidth: 0,
      backgroundColor: '#e2ebf0',
      backgroundOpacity: 0.5,
      backgroundPadding: 0,
      subtitleFontWeight: '400',
      subtitleFontSize: '12',
      subtitleColor: '#000000'

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
