import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
  
  rawData: any = [];
  extractedCharacters: any = [];
  loading = false;

  constructor(private service:FetchApiDataService, private http:HttpClient) { }

  ngOnInit() {    
  }
  getData(){
    this.loading = true;
    let data = this.service.fetchApiData().subscribe(response =>{
      this.rawData = response;
      this.extractedCharacters = this.rawData.results;
      this.loading = false;       
    });
  }


}
