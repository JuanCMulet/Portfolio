import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { Education } from './Education'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations:Education[] = [];
  showAddEduc:boolean = false;
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
    this.db.getData("education").subscribe(data => {
      this.educations = data
    })
  }

  toggleForm() {
    this.showAddEduc = !this.showAddEduc;
  }

  deleteEducation(education:Education) {
    this.db.deleteItem("education", education).subscribe( 
      () => {
        this.educations = this.educations.filter( (e) => {
          return e.id !== education.id 
        })
      });
  }

  addEducation(education:Education) {
    this.db.addItem("education", education).subscribe(
      (education) => {
        this.educations.push(education);
      }
    )
    this.showAddEduc = false;
  }

  updateEducation(education:Education) {
    this.db.updateItem("education", education).subscribe()
  }

}
