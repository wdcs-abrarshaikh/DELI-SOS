import swal from 'sweetalert2';
import { IndexService } from '../index.service';
import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { ImageSliderComponent } from '../../../imageSlider/imageSlider.component';

@Component({
    selector: 'app-viewrestaurant',
    templateUrl: './viewrestaurant.component.html',
    styleUrls: ['./viewrestaurant.component.css']
})
export class ViewrestaurantComponent implements OnInit {

    @Input() cuisin;
    RestaurantForm: FormGroup;
    menuImages: Array<any>;
    restaurantImages: Array<any>;
    mealOffers: Array<any> = []
    pdfIcon = '../../../../../../assets/PDF_file_icon.svg';
    constructor(
        public activeModal: NgbActiveModal,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private modalService: NgbModal,
        private IndexService: IndexService,
        private toastService: ToastrService) { }

    ngOnInit() {
        this.buildRestaurantForm();
    }

    get f() {
        return this.RestaurantForm.controls;
    }

    buildRestaurantForm() {
        this.RestaurantForm = this._formBuilder.group({
            name: [''],
            description: [''],
            latitude: [''],
            longitude: [''],
            openTime: [''],
            closeTime: [''],
            restaurantImages: [''],
            contactNumber: [''],
            website: [''],
            menu: [''],
            photos: [''],
            mealOffers: [''],
            perPersonCost: [''],
            cuisinOffered: ['']

        });

    }
    openImageSlider(images, index) {
        let temp = Object.assign([], images)
        if (temp[index].split('.').pop() == 'pdf') {
            window.open(temp[index])
        }
        else {
            let imagesOnly = [temp[index]]
            temp.splice(index, 1);
            temp.map((img) => {
                let extension = img.split('.').pop();
                if (extension != 'pdf') {
                    imagesOnly.push(img)
                }
            })

            const modalRef = this.modalService.open(ImageSliderComponent, {
                size: 'lg',
                windowClass: 'imgPreview'
            });
            modalRef.componentInstance.images = imagesOnly;
        }
    }

    getMenuUrl(url) {
        let extension = url.split('.').pop();
        if (extension == 'pdf') {
            return this.pdfIcon;
        } else {
            return url;
        }
    }
}
