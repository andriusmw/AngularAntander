import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingJsonServiceService {

  private jsonURL = '../../assets/json.json';

  constructor(private http: HttpClient) { }

  //La función
  getData(): Observable<any> {
    return this.http.get(this.jsonURL)
  }

}
