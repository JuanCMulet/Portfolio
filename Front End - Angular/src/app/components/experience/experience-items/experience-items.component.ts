import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Subscription } from 'rxjs';
import { Experience } from '../Experience'

@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.css']
})
export class ExperienceItemsComponent implements OnInit {
  @Input() experience:any;
  @Input() loggedIn:boolean = false;
  @Output() onDeleteExperience: EventEmitter<Experience> = new EventEmitter();
  subscription?: Subscription;

  constructor(
    private logService: LogService,
  ) {
    /*this.subscription = this.logService.onToggle().subscribe(
      value => {
        this.loggedIn = value;
      }
    )*/
   }

  ngOnInit(): void {
  }

  onDelete(experience:Experience) {
    this.onDeleteExperience.emit(experience);
  }

}
