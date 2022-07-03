import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skill } from '../Skills'

@Component({
  selector: 'app-skills-items',
  templateUrl: './skills-items.component.html',
  styleUrls: ['./skills-items.component.css']
})
export class SkillsItemsComponent implements OnInit {
  @Input() skill:any;
  @Input() loggedIn:boolean = false;
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();
  subscription?: Subscription;

  constructor(
  ) {
   }

  ngOnInit(): void {
  }

  onDelete(skill:Skill) {
    this.onDeleteSkill.emit(skill);
  }

}
