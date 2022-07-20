import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from '../Skills'

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() onAddSkill: EventEmitter<Skill> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(it:NgForm){
    if(it.valid){
      this.onAddSkill.emit(it.value)
    }
  }

}
