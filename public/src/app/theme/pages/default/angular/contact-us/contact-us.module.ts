import { ContactUsComponent} from './contact-us.component';
import { ContactUsService } from './contact-us.service';
import { ContactUsRoutingModule } from './contact-us.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../../default.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: ContactUsComponent
			}
		]
	},
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
		ContactUsRoutingModule,
		LayoutModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		DataTablesModule,

	],

	exports: [ContactUsComponent],
	declarations: [ContactUsComponent],
	providers: [ContactUsService],
	entryComponents: []

})
export class ContactUsModule {
}