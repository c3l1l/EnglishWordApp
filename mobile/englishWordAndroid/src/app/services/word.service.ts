import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService implements OnInit {

  constructor(private http:HttpClient, @Inject('apiUrl') private apiUrl:string) { }
  ngOnInit(): void {
  }

  getAll(){
    return this.http.get(`${this.apiUrl}/words`);
  }
  delete(id:number){
    return this.http.delete(`${this.apiUrl}/words/${id}`);
  }
}
