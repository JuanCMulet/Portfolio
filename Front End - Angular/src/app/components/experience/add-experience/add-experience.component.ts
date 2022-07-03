import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experience } from '../Experience';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  @Output() onAddExperience: EventEmitter<Experience> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(it:NgForm){
    if(it.valid){
      this.onAddExperience.emit(it.value)
    }
  }

}
