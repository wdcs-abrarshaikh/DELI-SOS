import {  ToastrService } from 'ngx-toastr';
import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private RestaurantService:RestaurantService,
             private router:Route,
             private location: Location,
             private toastService: ToastrService,) { }

  ngOnInit() {
  }
}
