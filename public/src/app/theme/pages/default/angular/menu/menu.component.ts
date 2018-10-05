import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
