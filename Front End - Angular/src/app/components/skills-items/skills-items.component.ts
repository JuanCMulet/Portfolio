import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-items',
  templateUrl: './skills-items.component.html',
  styleUrls: ['./skills-items.component.css']
})
export class SkillsItemsComponent implements OnInit {
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

}
