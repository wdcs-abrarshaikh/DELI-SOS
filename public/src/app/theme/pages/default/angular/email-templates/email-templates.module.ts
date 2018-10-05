import { EmailService } from './email.service';
import { EmailRoutingModule } from './email.routing';
import { EmailTemplatesComponent, NgbdModalContent } from './email-templates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../../default.component';
import { NgxEditorModule } from 'ngx-editor';
import { LayoutModule } from '../../../../layouts/layout.module';
// import { CustomPipePipe } from '../../../../../../app/custom-pipe.pipe';

const routes: Routes = [{
	path: "",
	component: DefaultComponent,
	children: [{
		path: "",
		component: EmailTemplatesComponent
	}]
}];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
		LayoutModule,
		EmailRoutingModule,
		NgxEditorModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule
	],
	exports: [EmailTemplatesComponent, NgbdModalContent],
	declarations: [
		EmailTemplatesComponent, NgbdModalContent],
	providers: [EmailService],
	entryComponents: [NgbdModalContent]
})
export class EmailTemplatesModule {
}
