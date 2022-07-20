import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';
import { About } from './About'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about:any = {};
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
    this.db.getData("about").subscribe(data => {
      this.about = data[0]
    })
  }

  updateBackground(background:any) {
    this.about.backImage = background.backImage;
    this.db.updateItem("about", this.about).subscribe()
  }

  updateProfile(profile:any) {
    this.about.name = profile.name;
    this.about.profileImage = profile.profileImage;
    this.about.position = profile.position;
    this.db.updateItem("about", this.about).subscribe()
  }

  updateDescription(description:any) {
    console.log(description, description.desc)
    this.about.desc = description.desc;
    console.log(this.about.desc)
    this.db.updateItem("about", this.about).subscribe()
  }

}
