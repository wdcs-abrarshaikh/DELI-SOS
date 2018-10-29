import { ContactUsComponent, NgbdModalContent } from './contact-us.component';
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
// import { ScriptLoaderService } from './_services/script-loader.service';

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

	exports: [ContactUsComponent, NgbdModalContent],
	declarations: [ContactUsComponent, NgbdModalContent],
	providers: [ContactUsService],
	entryComponents: [NgbdModalContent]

})
export class ContactUsModule {
}