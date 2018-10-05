import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotificationService } from './notifications.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


// @Component({
//   selector: 'app-user',
//   template: ` <div class="modal-header">
//   <h4 class="modal-title">{{ isAdd ? 'Add' : 'Edit'}} Notification</h4>
//   <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//     <span aria-hidden="true">&times;</span>
//   </button>
// </div>
// <div class="modal-body">
// <form [formGroup]="notificationForm" (ngSubmit)="addNotification()">
//             <div class="form-group">
//                 <label for="name">Name</label>
//                 <input type="text" formControlName="name" [(ngModel)]="name" class="form-control"/>
//                 <span *ngIf="notificationForm.controls.name.errors?.required" class="lbl-err">Name is required.</span>
                
//             </div>
//             <div class="form-group">
//                 <label for="content">Content</label>
//                 <input type="text" formControlName="content" [(ngModel)]="content" class="form-control" />
//                 <span *ngIf="notificationForm.controls.content.errors?.required" class="lbl-err">content is required.</span>
                
//             </div>
//             <div class="form-group">
//                 <label for="flag">Flag</label>
//                 <input type="flag" formControlName="flag"  [(ngModel)]="flag" class="form-control"/>
//                 <span *ngIf="notificationForm.controls.flag.errors?.required" class="lbl-err">flag is required.</span>
                
//             </div>
        
//            <div class="modal-footer">
//             <div class="form-group">

//             <button type="submit"  class="btn btn-outline-dark" [disabled]="validateForm()">Save</button>
//             <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cancel</button>
            
//             </div>
//          </div>
//         </form>`,
//   styleUrls: ['./notifications.component.css']
// })

// export class NgbdModalContent {
//   notificationList: Array<any>;
//   notificationForm: FormGroup;

//   @Input() id;
//   @Input() fullName;
//   @Input() gender;
//   loading = false;
//   submitted = false;


//   isAdd: boolean;

//   constructor(public activeModal: NgbActiveModal,
//     private _router: Router,
//     private _formBuilder: FormBuilder,
//     private modalService: NgbModal,
//     private notificationService: NotificationService,
//     private toastService: ToastrService) { }
//   ngOnInit() {
//     this.buildUserForm();

//   }

//   get f() {
//     return this.notificationForm.controls;
//   }
//   buildUserForm() {
//     this.notificationForm = this._formBuilder.group({
//       emailId: ['', [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), Validators.required]],
//       password: ['', [Validators.required]],
//       fullName: ['', [Validators.required]],
//       deviceToken: ['', [Validators.required]],
//       deviceType: ['', [Validators.required]],
//       gender: '',


//     });
//   }
//   addNotification() {

//     if (this.isAdd) {
//       var addObj = {
//         "emailId": this.notificationForm.controls['emailId'].value,
//         "password": this.notificationForm.controls['password'].value,

//         "fullName": this.notificationForm.controls['fullName'].value,
//         "deviceToken": this.notificationForm.controls['deviceToken'].value,
//         "deviceType": this.notificationForm.controls['deviceType'].value,

//         "gender": this.notificationForm.controls['gender'].value,


//       }
//       this.notificationService.addUser(addObj).subscribe(
//         data => {
//           this.getAllUser();
//           this.activeModal.dismiss();

//           this.toastService.success(data['response'].responseMessage);
//         },
//         error => {

//           this.toastService.error(error['response'].responseMessage);
//         });
//     } else {
//       var editObj = {
//         "emailId": this.notificationForm.controls['emailId'].value,
//         "password": this.notificationForm.controls['password'].value,

//         "fullName": this.notificationForm.controls['fullName'].value,
//         "deviceToken": this.notificationForm.controls['deviceToken'].value,
//         "deviceType": this.notificationForm.controls['deviceType'].value,

//         "gender": this.notificationForm.controls['gender'].value,


//       }
//       console.log(' edit user id', this.id)
//       this.notificationService.editUser(editObj, this.id).subscribe(
//         data => {
//           this.getAllUser();
//           this.activeModal.dismiss();
//           console.log('dataaaaaa', data);
//           this.toastService.success(data['response'].responseMessage);
//         },
//         error => {
//           console.log('error' + error)
//           this.toastService.error(error['errors'].message);
//         });
//     }
//   }
//   getAllUser() {
//     this.notificationService.getAllUsers().subscribe((response: any) => {
//       this.notificationService.setUsers(response);
//     })
//   }
//   validateForm() {
//     if (this.notificationForm.valid) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.notificationForm.invalid) {
//       return;
//     }

//     this.loading = true;
//   }



// }



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationList: any;
  notificationLists: Array<any>;
  notificationForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private modalService: NgbModal,
    private toastService: ToastrService,
    private _formBuilder: FormBuilder,
    private notificationService: NotificationService) {

    this.notificationService.getAllNotifications().subscribe((data: any) => {
      let blankArray = []
      for (let i in data.response.result[0]) {
        let obj = {
          name: i
        };
        for (let k in data.response.result[0][i]) {
          obj[k] = data.response.result[0][i][k]
        }
        blankArray.push(obj);
      }
      this.notificationList = blankArray

    })
  }

  ngOnInit() {
    this.getAllNotifications();
  }

  updateNotificationModel(obj) {
    // var editObj = {
    //   "name": this.notificationForm.controls['name'].value,
    //   "content": this.notificationForm.controls['content'].value,
    //   "flag": this.notificationForm.controls['flag'].value,
    //   "isActive": this.notificationForm.controls['isActive'].value

    // }
    var editObj = obj;
    console.log(editObj);
    this.notificationService.updateNotifications(editObj).subscribe(
      data => {
        this.toastService.success(data['response'].responseMessage);
        this.getAllNotifications();
      },
      error => {
        this.toastService.error(error['error'].message);
      });
  }

  validateForm() {
    if (this.notificationForm.valid) {
      return false;
    } else {
      return true;
    }
  }

  getAllNotifications() {
    this.notificationService.getAllNotifications().subscribe((response: any) => {
      this.notificationService.setNotifications(response.response.result);
    })
  }

  get f() {
    return this.notificationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.notificationForm.invalid) {
      return;
    }
    this.loading = true;
  }

  open(obj) {

  }
}
