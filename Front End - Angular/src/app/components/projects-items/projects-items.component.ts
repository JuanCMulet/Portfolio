import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.css']
})
export class ProjectsItemsComponent implements OnInit {
  projects:any
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
    this.db.getData().subscribe(data => {
      this.projects = data.projects
    })
  }

}
