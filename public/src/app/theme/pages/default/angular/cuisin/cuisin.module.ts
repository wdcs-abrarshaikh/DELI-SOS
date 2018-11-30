import { CuisinComponent } from './cuisin.component';
import { CuisinService } from './cuisin.service';
import { CuisinRoutingModule } from './cuisin.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../../default.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { DataTablesModule } from 'angular-datatables';
import { AddEditcuisinComponent } from './add-editcuisin/add-editcuisin.component';
// import { ScriptLoaderService } from './_services/script-loader.service';



const routes: Routes = [
	{
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: CuisinComponent
			}
		]
	},
];

@NgModule({
	imports: [
		CommonModule, RouterModule.forChild(routes),
		CuisinRoutingModule,
		LayoutModule,
		NgbModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		DataTablesModule,

	],

	exports: [CuisinComponent, AddEditcuisinComponent],
	declarations: [CuisinComponent, AddEditcuisinComponent],
	providers: [CuisinService],
	entryComponents: [AddEditcuisinComponent]

})
export class CuisinModule {
}