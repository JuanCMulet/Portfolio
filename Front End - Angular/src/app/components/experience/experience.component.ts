import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  showAddExp:boolean = false;
  loggedIn:boolean = false;
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

  toggleLogIn() {
    this.logService.toggleLogIn();
  }

  toggleForm() {
    this.showAddExp = !this.showAddExp;
  }

}
