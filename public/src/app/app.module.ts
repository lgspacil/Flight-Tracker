import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpService } from "app/http.service";
import { ResultsComponent } from './main/results/results.component';
import { SelectedFlightInfoComponent } from './main/results/selected-flight-info/selected-flight-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultsComponent,
    SelectedFlightInfoComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
