import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @Output() onUpdateExperience: EventEmitter<Experience> = new EventEmitter();
  editExp:boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  onDelete(experience:Experience) {
    this.onDeleteExperience.emit(experience);
  }

  toggleEdit(): void {
    this.editExp = !this.editExp;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      it.value.id = this.experience.id
      this.experience = it.value
      this.onUpdateExperience.emit(it.value)
      this.editExp = false;
    }
  }

}
