import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { Experience } from './Experience'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences:Experience[] = []
  showAddExp:boolean = false;
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
    this.db.getData("experience").subscribe(data => {
      this.experiences = data
    })
  }

  toggleForm() {
    this.showAddExp = !this.showAddExp;
  }

  deleteExperience(experience:Experience) {
    this.db.deleteItem("experience", experience).subscribe( 
      () => {
        this.experiences = this.experiences.filter( (e) => {
          return e.id !== experience.id 
        })
      });
  }

  addExperience(experience:Experience) {
    this.db.addItem("experience", experience).subscribe(
      (education) => {
        this.experiences.push(education);
      }
    )
    this.showAddExp = false;
  }

}
