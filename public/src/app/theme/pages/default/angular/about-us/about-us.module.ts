import { AboutUsService } from './about-us.service';
import { AboutUsComponent,NgbdModalContent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us.routing';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultComponent} from '../../default.component';
import {LayoutModule} from '../../../../layouts/layout.module';
import { NgxEditorModule } from 'ngx-editor'


const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: AboutUsComponent
			} 
		]
	},
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
		AboutUsRoutingModule,
		NgxEditorModule,
		LayoutModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule
	],
	
	exports: [AboutUsComponent,NgbdModalContent],
	declarations: [AboutUsComponent,NgbdModalContent],
	providers: [AboutUsService], 
	entryComponents:[NgbdModalContent]
	
})
export class AboutUsModule {
}