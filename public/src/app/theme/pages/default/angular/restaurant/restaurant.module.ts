

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
//   import {BrowserModule} from '@angular/platform-browser';
//  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 


// const routes: Routes = [
// 	{
// 		path: "",
// 		component: DefaultComponent,
// 		children: [
// 			{
// 				path: "",
// 				component: RestaurantComponent
// 			}
// 		]
// 	}
// ];

@NgModule({
	imports: [
		CommonModule, 
		// RouterModule.forChild(routes),
		RestaurantRoutingModule,
		LayoutModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
		

	],
	
	exports: [RestaurantComponent,NgbdModalContent],
	declarations: [RestaurantComponent,NgbdModalContent],
	providers: [RestaurantComponent], 
	entryComponents:[NgbdModalContent]
	
})
export class RestaurantModule {
}