import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { Skill } from './Skills'


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Skill[] = [];
  showAddSkill:boolean = false;
  loggedIn:boolean = false;
  subscription?: Subscription;

  constructor(
    private logService: LogService,
    private db: DataService
  ) {
    this.subscription = this.logService.onToggle().subscribe(
      value => {
        this.loggedIn = value;
      }
    )
   }

  ngOnInit(): void {
    this.db.getData("skills").subscribe(data => {
      this.skills = data
    })
  }

  toggleForm() {
    this.showAddSkill = !this.showAddSkill;
  }

  deleteSkill(skill:Skill) {
    this.db.deleteItem("skills", skill).subscribe( 
      () => {
        this.skills = this.skills.filter( (s) => {
          return s.id !== skill.id
        })
      });
  }

  addSkill(skill:Skill) {
    this.db.addItem("skills", skill).subscribe(
      (education) => {
        this.skills.push(skill);
      }
    )
    this.showAddSkill = false;
  }

}
