import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '../Projects'

@Component({
  selector: 'app-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.css']
})
export class ProjectsItemsComponent implements OnInit {
  @Input() project:any;
  @Input() loggedIn:boolean = false;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();
  @Output() onUpdateProject: EventEmitter<Project> = new EventEmitter();
  editProj:boolean = false;

  constructor(
  ) {
   }

  ngOnInit(): void {
  }

  onDelete(project:Project) {
    this.onDeleteProject.emit(project);
  }

  toggleEdit(): void {
    this.editProj = !this.editProj;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      if(it.value.url && !/^(https?):\/\//i.test(it.value.url)
                      && 'http://'.indexOf(it.value.url) !== 0 
                      && 'https://'.indexOf(it.value.url) !== 0 ) {
                        it.value.url = 'http://' + it.value.url
    }
      it.value.id = this.project.id
      this.project = it.value
      this.onUpdateProject.emit(it.value)
      this.editProj = false;
    }
  }
}
