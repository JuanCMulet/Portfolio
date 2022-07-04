import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../Projects'

@Component({
  selector: 'app-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.css']
})
export class ProjectsItemsComponent implements OnInit {
  @Input() project:any;
  @Input() loggedIn:boolean = false;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();

  constructor(
  ) {
   }

  ngOnInit(): void {
  }

  onDelete(project:Project) {
    this.onDeleteProject.emit(project);
  }
}
