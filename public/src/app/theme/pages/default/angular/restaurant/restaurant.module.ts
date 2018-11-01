

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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatStepperModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule,
  } from '@angular/material';
 


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
		Ng2SearchPipeModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule

	],
	
	exports: [RestaurantComponent,NgbdModalContent],
	declarations: [RestaurantComponent,NgbdModalContent],
	providers: [RestaurantComponent], 
	entryComponents:[NgbdModalContent]
	
})
export class RestaurantModule {
}