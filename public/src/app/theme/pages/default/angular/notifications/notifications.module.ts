import { NotificationService } from './notifications.service';
import { NotificationsRoutingModule } from './notifications.routing';
import { NotificationsComponent } from './notifications.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../../default.component';
import { NgxEditorModule } from 'ngx-editor';
import { LayoutModule } from '../../../../layouts/layout.module';


const routes: Routes = [{
	path: "",
	component: DefaultComponent,
	children: [{
		path: "",
		component: NotificationsComponent
	}]
}];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
		LayoutModule,
		NotificationsRoutingModule,
		NgxEditorModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule
	],
	exports: [NotificationsComponent],
	declarations: [
		NotificationsComponent],
	providers: [NotificationService],
	entryComponents: []
})
export class NotificationsModule {
}
