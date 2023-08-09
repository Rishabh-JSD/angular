import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Header } from './header'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private baseUrl = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Header[]>{
    return this.http.get<Header[]>(`${this.baseUrl}`);
  }
}
