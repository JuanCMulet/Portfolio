import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  showAddEduc:boolean = false;
  subscription?:Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => {
        this.showAddEduc = value
      }
    )
  }

  ngOnInit(): void {
  }

  toggleAddEduc() {
    this.uiService.toggleAddEduc();
    console.log("Educ: ", this.showAddEduc)
  }

}
