import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {

  constructor(private http:HttpClient) { }


  fetchApiData(){
    return this.http.get<any[]>('https://swapi.co/api/people/')      
  }



}
