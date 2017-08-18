import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() flightData;

  carrierName = {};

  selected_flight_page = false;

  selected_flight_info = null;

  results_page = true;

  constructor() { }

  ngOnInit() {
    console.log("in the results component with the flight data: ", this.flightData);
    this.carrierName = this.flightData.trips.data.carrier;
  }

  selectedThis(num){
    console.log(num);

    this.selected_flight_info = this.flightData.trips.tripOption[num];

    this.selected_flight_page = true;
    this.results_page = false;

  }

}
