webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_main_main_component__["a" /* MainComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_results_results_component__ = __webpack_require__("../../../../../src/app/main/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_results_selected_flight_info_selected_flight_info_component__ = __webpack_require__("../../../../../src/app/main/results/selected-flight-info/selected-flight-info.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_results_selected_flight_info_selected_flight_info_component__["a" /* SelectedFlightInfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.makeAPICallToServer = function (info) {
        console.log("hello Lucas");
        return this._http.post("https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyBg62BV3Lq0rcOWQyKZiE3t1P-jC9YoXY8", info).map(function (data) { return data.json(); }).toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".buttonLoad{\n    background-color: #4CAF50; /* Green background */\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 12px 16px; /* Some padding */\n    font-size: 16px ;/* Set a font size */\n    width: 292px;\n    text-align: center;\n\n}\n\n.notLoaded{\n    text-align: center;\n    border: none; /* Remove borders */\n    color: white; /* White text */\n    padding: 12px 16px; /* Some padding */\n    font-size: 16px; /* Set a font size */\n    width: 260px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\" *ngIf=\"show_form == true\">\n  <fieldset>\n    <legend>Flight API search</legend>\n    <div class=\"form-group\">\n      <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Origin</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"SFO\" name=\"origin\" [(ngModel)]=\"info.request.slice[0].origin\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\" class=\"col-lg-2 control-label\">Destination</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"destination\" placeholder=\"ORD\" name=\"destination\" [(ngModel)]=\"info.request.slice[0].destination\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\" class=\"col-lg-2 control-label\">Date:</label>\n      <div class=\"col-lg-10\">\n        <input type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"YYYY-MM-DD\" name=\"date\" [(ngModel)]=\"info.request.slice[0].date\">\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-primary\" [class.buttonLoad]=\"loadButton\" (click)=\"makeAPICall()\">\n          <p *ngIf=\"loadButton == false\" class=\"notLoaded\">Submit</p>\n          <i [class.fa]=\"loadButton\" [class.fa-refresh]=\"loadButton\" [class.fa-spin]=\"loadButton\"></i><p *ngIf=\"loadButton == true\">Loading</p>\n        </button>\n      </div>\n    </div>\n  </fieldset>\n</form>\n\n\n<app-results (goHomeClicked)=\"closeResultsPage($event)\" [flightData]=\"flight_info\" *ngIf=\"show_results == true\">loading... </app-results>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.info = {
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
        };
        this.show_results = false;
        this.show_form = true;
        this.loadButton = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        console.log("loading");
    };
    MainComponent.prototype.makeAPICall = function () {
        var _this = this;
        this.loadButton = true;
        this._httpService.makeAPICallToServer(this.info)
            .then(function (data) {
            _this.flight_info = data;
            _this.show_results = true;
            _this.show_form = false;
        })
            .catch(function (err) {
            console.log("got an error when making a call back");
        });
    };
    MainComponent.prototype.closeResultsPage = function (event) {
        this.show_results = false;
        this.show_form = true;
        this.loadButton = false;
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-danger\" role=\"button\" (click)=\"goHome()\">Home</a>\n\n<div *ngIf=\"results_page == true\">\n  <h3>Results</h3>\n\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Price</th>\n        <th>Carrier</th>\n        <th>Number of Stops</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let trip of flightData.trips.tripOption; let i = index\">\n        <td>{{i}}</td>\n        <td>{{trip.saleTotal}}</td>\n        <ng-container *ngFor=\"let c of carrierName\">\n          <td *ngIf=\"trip.slice[0].segment[0].flight.carrier == c.code\">{{c.name}}</td>\n        </ng-container>\n        <td>{{trip.slice[0].segment.length}}</td>\n        <button (click)=\"selectedThis(i)\">Select</button>\n      </tr>\n     \n    </tbody>\n  </table> \n</div>\n\n<app-selected-flight-info (goBackClicked)=\"closeResultsPage($event)\" [carrier_info]=\"carrierName\" [selected_flight]=\"selected_flight_info\" *ngIf=\"selected_flight_page == true\"></app-selected-flight-info>"

/***/ }),

/***/ "../../../../../src/app/main/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultsComponent = (function () {
    function ResultsComponent() {
        this.goHomeClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.carrierName = {};
        this.selected_flight_page = false;
        this.selected_flight_info = null;
        this.selected_flight_carrier = '';
        this.results_page = true;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        console.log("in the results component with the flight data: ", this.flightData);
        this.carrierName = this.flightData.trips.data.carrier;
        console.log(this.carrierName);
    };
    ResultsComponent.prototype.selectedThis = function (num) {
        console.log(num);
        this.selected_flight_info = this.flightData.trips.tripOption[num];
        this.selected_flight_page = true;
        this.results_page = false;
    };
    ResultsComponent.prototype.closeResultsPage = function (event) {
        console.log(event);
        console.log("I am back in the results page");
        this.results_page = true;
        this.selected_flight_page = false;
    };
    ResultsComponent.prototype.goHome = function () {
        this.goHomeClicked.emit(false);
    };
    return ResultsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ResultsComponent.prototype, "flightData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], ResultsComponent.prototype, "goHomeClicked", void 0);
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/main/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResultsComponent);

//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/results/selected-flight-info/selected-flight-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\n   text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/results/selected-flight-info/selected-flight-info.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-danger\" role=\"button\" (click)=\"goBack()\">Back</a>\n\n<h1 class=\"center\"> Flight Information From: {{flights_info.origin[0]}} to {{flights_info.destination[flights_info.destination.length -1]}}</h1>\n\n\n<h3 class=\"center\">{{flights_info.sale_price}}</h3>\n\n<div class=\"container\" *ngFor=\"let x of legs; let i = index\">\n    <h2>Trip Leg {{i + 1}}</h2>\n    <ul class=\"list-group\">\n        Cabin: <li class=\"list-group-item\">{{flights_info.cabin[i]}}</li>\n        Connection Duration: <li class=\"list-group-item\">{{flights_info.total_connection_duration[i]}} min</li>\n        Flight Duration:<li class=\"list-group-item\">{{flights_info.total_flight_duration[i]}} min</li>\n        Flight Carrier: <li class=\"list-group-item\">{{flights_info.carrier[i]}}</li>\n        Flight Number: <li class=\"list-group-item\">{{flights_info.flight_number[i]}}</li>\n        Aircraft: <li class=\"list-group-item\">{{flights_info.aircraft[i]}}</li>\n        Arrival Time: <li class=\"list-group-item\">{{flights_info.arrivalTime[i]}}</li>\n        Departure Time: <li class=\"list-group-item\">{{flights_info.departureTime[i]}}</li>\n        Destination: <li class=\"list-group-item\">{{flights_info.destination[i]}}</li>\n        Origin: <li class=\"list-group-item\">{{flights_info.origin[i]}}</li>\n    </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/results/selected-flight-info/selected-flight-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedFlightInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedFlightInfoComponent = (function () {
    function SelectedFlightInfoComponent() {
        this.goBackClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.flights_info = {
            sale_price: '',
            cabin: [],
            total_connection_duration: [],
            total_flight_duration: [],
            carrier: [],
            flight_number: [],
            aircraft: [],
            arrivalTime: [],
            departureTime: [],
            destination: [],
            duration: [],
            origin: []
        };
        this.legs = [];
    }
    SelectedFlightInfoComponent.prototype.ngOnInit = function () {
        console.log(this.selected_flight);
        console.log("the carrier code is this: ", this.carrier_info);
        this.flights_info.sale_price = this.selected_flight.saleTotal;
        for (var i in this.selected_flight.slice[0].segment) {
            this.flights_info.cabin.push(this.selected_flight.slice[0].segment[i].cabin);
            if (this.selected_flight.slice[0].segment[i].connectionDuration == null) {
                this.flights_info.total_connection_duration.push(0);
            }
            else {
                this.flights_info.total_connection_duration.push(this.selected_flight.slice[0].segment[i].connectionDuration);
            }
            this.flights_info.total_flight_duration.push(this.selected_flight.slice[0].segment[i].duration);
            for (var c in this.carrier_info) {
                if (this.carrier_info[c].code == this.selected_flight.slice[0].segment[i].flight.carrier) {
                    this.flights_info.carrier.push(this.carrier_info[c].name);
                }
            }
            // this.flights_info.carrier.push(this.selected_flight.slice[0].segment[i].flight.carrier);
            this.flights_info.flight_number.push(this.selected_flight.slice[0].segment[i].flight.number);
            this.legs.push("tetsing");
            for (var j in this.selected_flight.slice[0].segment[i].leg) {
                this.flights_info.aircraft.push(this.selected_flight.slice[0].segment[i].leg[j].aircraft);
                this.flights_info.departureTime.push(this.selected_flight.slice[0].segment[i].leg[j].departureTime);
                this.flights_info.arrivalTime.push(this.selected_flight.slice[0].segment[i].leg[j].arrivalTime);
                this.flights_info.destination.push(this.selected_flight.slice[0].segment[i].leg[j].destination);
                this.flights_info.duration.push(this.selected_flight.slice[0].segment[i].leg[j].duration);
                this.flights_info.origin.push(this.selected_flight.slice[0].segment[i].leg[j].origin);
            }
        }
    };
    SelectedFlightInfoComponent.prototype.goBack = function () {
        console.log("I am here in the go home call..");
        this.goBackClicked.emit(false);
    };
    return SelectedFlightInfoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SelectedFlightInfoComponent.prototype, "selected_flight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SelectedFlightInfoComponent.prototype, "carrier_info", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], SelectedFlightInfoComponent.prototype, "goBackClicked", void 0);
SelectedFlightInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-selected-flight-info',
        template: __webpack_require__("../../../../../src/app/main/results/selected-flight-info/selected-flight-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/results/selected-flight-info/selected-flight-info.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SelectedFlightInfoComponent);

//# sourceMappingURL=selected-flight-info.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map