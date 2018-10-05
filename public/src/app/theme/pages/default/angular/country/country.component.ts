import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  private _modalRef: any;
  private _modalContent: any;
  constructor(private modal: NgbModal,
    private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this._modalRef = this.modalService.open(content);
    this._modalContent = content;
  }

}
