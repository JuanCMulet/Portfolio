import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../Projects'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Output() onAddProject: EventEmitter<Project> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(it:NgForm){
    if(it.valid){
      if(it.value.url && !/^(https?):\/\//i.test(it.value.url)
                      && 'http://'.indexOf(it.value.url) !== 0 
                      && 'https://'.indexOf(it.value.url) !== 0 ) {
                        it.value.url = 'http://' + it.value.url
    }
      this.onAddProject.emit(it.value)
    }
  }

}
