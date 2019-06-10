import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.css']
})
export class SiteSettingsComponent implements OnInit {
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
