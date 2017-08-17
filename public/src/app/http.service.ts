import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  makeAPICallToServer(info){
    console.log("hello Lucas")
    return this._http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBg62BV3Lq0rcOWQyKZiE3t1P-jC9YoXY8", info).map(data => data.json()).toPromise()
  }

}
