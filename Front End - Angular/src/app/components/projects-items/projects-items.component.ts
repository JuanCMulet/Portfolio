import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Subscription } from 'rxjs';
import { Project } from '../../Projects'

@Component({
  selector: 'app-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.css']
})
export class ProjectsItemsComponent implements OnInit {
  @Input() project:any;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();
  loggedIn:boolean = false;
  subscription?: Subscription;

  constructor(
    private logService: LogService,
  ) {
    this.subscription = this.logService.onToggle().subscribe(
      value => {
        this.loggedIn = value;
      }
    )
   }

  ngOnInit(): void {
  }

  onDelete(project:Project) {
    this.onDeleteProject.emit(project);
  }
}
