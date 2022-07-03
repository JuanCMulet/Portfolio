import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private loggedIn:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleLogIn(): void {
    console.log("logged in")
    this.loggedIn = !this.loggedIn;
    this.subject.next(this.loggedIn);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  resetLogIn(): void {
    this.loggedIn = false;
  }
}
