import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://localhost:5001"

  constructor(
    private http:HttpClient
  ) { }

  getData(data: string):Observable<any> {
    console.log(this.apiUrl)
    return this.http.get(this.apiUrl+"/"+data)
  }

  deleteItem(data: string, item: any): Observable<any> {
    const url = `${this.apiUrl}/${data}/${item.id}`;
    return this.http.delete<any>(url);
  }
}
