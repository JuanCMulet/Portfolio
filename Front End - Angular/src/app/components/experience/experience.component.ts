import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  showAddExp:boolean = false;
  subscription?:Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => {
        this.showAddExp = value
      }
    )
  }

  ngOnInit(): void {
  }

  toggleAddExp() {
    this.uiService.toggleAddExp();
    console.log("Exp: ", this.showAddExp)
  }



}
