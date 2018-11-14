import { ScriptLoaderService } from './../../../../_services/script-loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexRoutingModule } from './index.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewrestaurantComponent } from './viewrestaurant/viewrestaurant.component';



const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent
            }
        ]
    }
];
        @NgModule({
            imports: [
        CommonModule,
        RouterModule.forChild(routes),
        LayoutModule,
        IndexRoutingModule,
        DataTablesModule,
        NgbModule.forRoot(),
        FormsModule,
		ReactiveFormsModule,
        ],
        exports: [
        RouterModule,ViewrestaurantComponent
        ],
        declarations: [
        IndexComponent, ViewrestaurantComponent],
        providers:[ScriptLoaderService],

        entryComponents: [ViewrestaurantComponent] })

        export class IndexModule  {}