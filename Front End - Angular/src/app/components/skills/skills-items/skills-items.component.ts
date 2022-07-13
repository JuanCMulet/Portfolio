import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @Output() onUpdateSkill: EventEmitter<Skill> = new EventEmitter();
  editSkill:boolean = false;

  constructor(
  ) {
   }

  ngOnInit(): void {
  }

  onDelete(skill:Skill) {
    this.onDeleteSkill.emit(skill);
  }

  toggleEdit(): void {
    this.editSkill = !this.editSkill;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      it.value.id = this.skill.id
      this.skill = it.value
      this.onUpdateSkill.emit(it.value)
      this.editSkill = false;
    }
  }

}
