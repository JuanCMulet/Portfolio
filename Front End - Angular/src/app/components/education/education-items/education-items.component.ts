import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Education } from '../Education';

@Component({
  selector: 'app-education-items',
  templateUrl: './education-items.component.html',
  styleUrls: ['./education-items.component.css']
})
export class EducationItemsComponent implements OnInit {
  @Input() education:any;
  @Input() loggedIn:boolean = false;
  @Output() onDeleteEducation: EventEmitter<Education> = new EventEmitter();
  @Output() onUpdateEducation: EventEmitter<Education> = new EventEmitter();
  editEduc:boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  onDelete(education:Education) {
    this.onDeleteEducation.emit(education);
  }

  toggleEdit(): void {
    this.editEduc = !this.editEduc;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      it.value.id = this.education.id
      this.education = it.value
      this.onUpdateEducation.emit(it.value)
      this.editEduc = false;
    }
  }

}
