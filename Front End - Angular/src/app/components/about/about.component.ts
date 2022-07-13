import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { Personal } from './Personal'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  personal:Personal = {
    "name": '',
    "backImage": '',
    "profileImage": '',
    "position": '',
    "about": ''
  };
  loggedIn:boolean = false;
  subscription?: Subscription;
  hoverBackground=false;

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
    this.db.getData("personalInfo").subscribe(data => {
      this.personal = data
    })
  }

}
