import { RestaurantService } from './restaurant.service';
// import { NgbdModalContent } from './restaurant.component';

import { RestaurantRoutingModule } from './restaurant.routing';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultComponent} from '../../default.component';
import {LayoutModule} from '../../../../layouts/layout.module';
import { RestaurantComponent } from './restaurant.component';

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
	},
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
	
        LayoutModule,
        RestaurantRoutingModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule
	],
	
	exports: [RestaurantComponent],
	declarations: [RestaurantComponent],
	providers: [RestaurantService], 
	entryComponents:[]
	
})
export class RestaurantModule {
}