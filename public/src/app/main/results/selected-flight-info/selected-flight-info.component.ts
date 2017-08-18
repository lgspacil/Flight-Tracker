import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selected-flight-info',
  templateUrl: './selected-flight-info.component.html',
  styleUrls: ['./selected-flight-info.component.css']
})
export class SelectedFlightInfoComponent implements OnInit {
  @Input() selected_flight;

  constructor() { }

  flights_info = {
    sale_price : '',
    cabin : [],
    total_connection_duration : [],
    total_flight_duration : [],
    carrier:[],
    flight_number : [],
  
    aircraft : [],
    arrivalTime : [],
    departureTime : [],
    destination : [],
    duration : [],
    origin : []

  }

  legs = [];



  ngOnInit() {
    console.log(this.selected_flight)

    this.flights_info.sale_price = this.selected_flight.saleTotal;

    for (let i in this.selected_flight.slice[0].segment){
      this.flights_info.cabin.push(this.selected_flight.slice[0].segment[i].cabin);

      if(this.selected_flight.slice[0].segment[i].connectionDuration == null){
        this.flights_info.total_connection_duration.push(0);
      }else{
        this.flights_info.total_connection_duration.push(this.selected_flight.slice[0].segment[i].connectionDuration);
      }
      this.flights_info.total_flight_duration.push(this.selected_flight.slice[0].segment[i].duration);
      this.flights_info.carrier.push(this.selected_flight.slice[0].segment[i].flight.carrier);
      this.flights_info.flight_number.push(this.selected_flight.slice[0].segment[i].flight.number);
      this.legs.push("tetsing");

      for (let j in this.selected_flight.slice[0].segment[i].leg){
        this.flights_info.aircraft.push(this.selected_flight.slice[0].segment[i].leg[j].aircraft);
        this.flights_info.departureTime.push(this.selected_flight.slice[0].segment[i].leg[j].departureTime);
        this.flights_info.arrivalTime.push(this.selected_flight.slice[0].segment[i].leg[j].arrivalTime);
        this.flights_info.destination.push(this.selected_flight.slice[0].segment[i].leg[j].destination);
        this.flights_info.duration.push(this.selected_flight.slice[0].segment[i].leg[j].duration);
        this.flights_info.origin.push(this.selected_flight.slice[0].segment[i].leg[j].origin);
      
      }
    }

  }

  goHome(){
    
  }

}
