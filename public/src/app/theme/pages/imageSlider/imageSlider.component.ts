import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-imageSlider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input () images;

 constructor(
 public activeModal: NgbActiveModal) { 
 }

  ngOnInit() {
  }

}
