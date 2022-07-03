import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

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

  addItem(data: string, item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"/"+data, item, httpOptions);
  }

}
