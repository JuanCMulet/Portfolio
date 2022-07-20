import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  @Input() background:any;
  @Input() loggedIn:boolean = false;
  @Output() onUpdateBackground: EventEmitter<any> = new EventEmitter();
  hoverBackground = false;
  editBackground:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(): void {
    this.editBackground = !this.editBackground;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      if(it.value.backImage && !/^(https?):\/\//i.test(it.value.backImage)
                      && 'http://'.indexOf(it.value.backImage) !== 0 
                      && 'https://'.indexOf(it.value.backImage) !== 0 ) {
                        it.value.backImage = 'http://' + it.value.backImage
    }
      this.background = it.value.backImage
      this.onUpdateBackground.emit(it.value)
      this.editBackground = false;
    }
  }

}
