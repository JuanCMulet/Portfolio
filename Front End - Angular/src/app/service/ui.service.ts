import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddExp:boolean = false;
  private showAddEduc:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddExp(): void {
    this.showAddExp = !this.showAddExp;
    this.subject.next(this.showAddExp);
    console.log("AddEduc: " + this.showAddEduc + "AddExp: " + this.showAddExp);
  }

  toggleAddEduc(): void {
    this.showAddEduc = !this.showAddEduc;
    this.subject.next(this.showAddEduc);
    console.log("AddEduc: " + this.showAddEduc + "AddExp: " + this.showAddExp);
  }

  onToggle(): Observable<any> {
    console.log(this.subject);
    return this.subject.asObservable();
  }

}
