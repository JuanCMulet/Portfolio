import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from '../Education'

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})

export class AddEducationComponent implements OnInit {
  @Output() onAddEducation: EventEmitter<Education> = new EventEmitter;
  
  constructor() {
    
   }

   ngOnInit(): void {

   }

   onSubmit(it:NgForm){
    if(it.valid){
      this.onAddEducation.emit(it.value)
    }
  }

}
