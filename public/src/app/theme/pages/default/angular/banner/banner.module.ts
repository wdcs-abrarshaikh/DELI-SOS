import { BannerRoutingModule } from './banner.routing';
import { BannerService } from './banner.service';
import { BannerComponent,NgbdModalContent } from './banner.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DefaultComponent} from '../../default.component';
import {LayoutModule} from '../../../../layouts/layout.module';

const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: BannerComponent
			}
		]
	},
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
		BannerRoutingModule,
		LayoutModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule
	],
	
	exports: [BannerComponent,NgbdModalContent],
	declarations: [BannerComponent,NgbdModalContent],
	providers: [BannerService], 
	entryComponents:[NgbdModalContent]
	
})
export class BannerModule {
}