import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingJsonServiceService {

  private helloURL = 'http://localhost:8080/user-info';

  constructor(private http: HttpClient) { }

  //La función
  getHelloMessage(): Observable<any> {
    return this.http.get(this.helloURL);
  }

}
