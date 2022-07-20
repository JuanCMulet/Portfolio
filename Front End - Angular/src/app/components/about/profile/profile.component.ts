import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() about:any;
  @Input() loggedIn:boolean = false;
  @Output() onUpdateProfile: EventEmitter<any> = new EventEmitter();
  editProfile:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(): void {
    this.editProfile = !this.editProfile;
  }

  onSubmit(it:NgForm){
    if(it.valid){
      if(it.value.profileImage && !/^(https?):\/\//i.test(it.value.profileImage)
                      && 'http://'.indexOf(it.value.profileImage) !== 0 
                      && 'https://'.indexOf(it.value.profileImage) !== 0 ) {
                        it.value.profileImage = 'http://' + it.value.profileImage
    }
      this.about.profileImage = it.value.profileImage
      this.onUpdateProfile.emit(it.value)
      this.editProfile = false;
    }
  }

}
