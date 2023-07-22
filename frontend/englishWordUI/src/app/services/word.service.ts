import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { WordModel } from '../models/word.model';

@Injectable({
  providedIn: 'root'
})
export class WordService implements OnInit {

  constructor(private http:HttpClient,@Inject('apiUrl') private apiUrl:string) { }

  ngOnInit(): void {

  }

  getAll(){
      return this.http.get(`${this.apiUrl}/words`);
  }

  getById(id:number){
     return this.http.get(`${this.apiUrl}/words/${id}`);
  }
  add(model:WordModel){
    return this.http.post(`${this.apiUrl}/words`,model);
  }
  update(model:WordModel){
    return this.http.put(`${this.apiUrl}/words`,model);

  }
  delete(id:number){
    return this.http.delete(`${this.apiUrl}/words/${id}`);
  }


}
