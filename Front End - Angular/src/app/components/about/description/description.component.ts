import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { About } from './../About';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() description: any;
  @Input() loggedIn:boolean = false;
  @Output() onUpdateDescription: EventEmitter<any> = new EventEmitter();
  editDescription:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(): void {
    console.log(this.description)
    this.editDescription = !this.editDescription;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      this.description = it.value.desc
      this.onUpdateDescription.emit(it.value)
      this.editDescription = false;
    }
  }

}
