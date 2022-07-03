import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Subscription } from 'rxjs';
import { Education } from '../Education';

@Component({
  selector: 'app-education-items',
  templateUrl: './education-items.component.html',
  styleUrls: ['./education-items.component.css']
})
export class EducationItemsComponent implements OnInit {
  @Input() education:any;
  @Input() loggedIn:boolean = false;
  @Output() onDeleteEducation: EventEmitter<Education> = new EventEmitter();

  subscription?: Subscription;

  constructor(
    private logService: LogService
  ) {
    this.subscription = this.logService.onToggle().subscribe(
      value => {
        this.loggedIn = value;
      }
    )
   }

  ngOnInit(): void {
  }

  onDelete(education:Education) {
    this.onDeleteEducation.emit(education);
  }

}
