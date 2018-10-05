import { Injectable } from '@angular/core';
import { URL } from './../../../../../app.service';
import { Subject } from 'rxjs/Subject';
import {  EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  // getRes(){

  // }

  constructor() { }
}
