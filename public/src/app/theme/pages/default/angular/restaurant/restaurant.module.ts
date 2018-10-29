

import { RestaurantComponent, NgbdModalContent} from './../restaurant/restaurant.component';
import { RestaurantService } from './restaurant.service';
import { RestaurantRoutingModule } from './restaurant.routing';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultComponent} from '../../default.component';
import {LayoutModule} from '../../../../layouts/layout.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DataTablesModule } from 'angular-datatables';

 


const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: RestaurantComponent
			}
		]
	}
];

@NgModule({
	imports: [
		CommonModule, 
		RestaurantRoutingModule,
		LayoutModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		DataTablesModule,
		

	],
	
	exports: [RestaurantComponent,NgbdModalContent],
	declarations: [RestaurantComponent,NgbdModalContent],
	providers: [RestaurantComponent], 
	entryComponents:[NgbdModalContent]
	
})
export class RestaurantModule {
}