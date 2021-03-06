import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { Project } from "./Projects"

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[] = [];
  showAddProj:boolean = false;
  loggedIn:boolean = false;
  subscription?: Subscription;

  constructor(
    private logService: LogService,
    private db:DataService
  ) {
    this.subscription = this.logService.onToggle().subscribe(
      value => {
        this.loggedIn = value;
      }
    )
   }

   ngOnInit(): void {
    this.db.getData("projects").subscribe(data => {
      this.projects = data
    })
  }

  toggleForm() {
    this.showAddProj = !this.showAddProj;
  }

  deleteProject(project:Project) {
    this.db.deleteItem("projects", project).subscribe( 
      () => {
        this.projects = this.projects.filter( (p) => {
          return p.id !== project.id 
        })
      });
  }

  addProject(project:Project) {
    this.db.addItem("projects", project).subscribe(
      (project) => {
        this.projects.push(project);
      }
    )
    this.showAddProj = false;
  }

  updateProject(project:Project) {
    this.db.updateItem("projects", project).subscribe()
  }

}
