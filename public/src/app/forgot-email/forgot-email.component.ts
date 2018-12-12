import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.css']
})
export class ForgotEmailComponent implements OnInit {

  constructor( private spinnerService: Ng4LoadingSpinnerService ) { }

  ngOnInit() {
  }

}
