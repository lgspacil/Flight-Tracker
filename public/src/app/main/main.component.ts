import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from "app/http.service";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  info = {
    "request": {
      "passengers": {
        "kind": "qpxexpress#passengerCounts",
        "adultCount": 1,
        "childCount": 0,
        "infantInLapCount": 0,
        "infantInSeatCount": 0,
        "seniorCount": 0
      },
      "slice": [
        {
          "kind": "qpxexpress#sliceInput",
          "origin": '',
          "destination": '',
          "date": '',
          "permittedDepartureTime": {
            "kind": "qpxexpress#timeOfDayRange",
          },
        }
      ],
      // "maxPrice": `USD`+'',
      "refundable": false,
      "solutions": 20,
    }
  }

  show_results = false;
  show_form = true;

  flight_info: null;
  
  
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) {}

  
  ngOnInit() {
  }

  makeAPICall(){
    this._httpService.makeAPICallToServer(this.info)

    .then((data) =>{
      this.flight_info = data;
      this.show_results = true;
      this.show_form = false;

    })
    .catch((err) =>{
      console.log("got an error when making a call back");
      
    })
  }


}
