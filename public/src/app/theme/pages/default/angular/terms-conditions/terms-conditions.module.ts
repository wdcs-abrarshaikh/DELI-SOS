import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultComponent } from '../../default.component';
import { LayoutModule } from '../../../../layouts/layout.module';
import { NgxEditorModule } from 'ngx-editor';
import { TermsConditionsComponent } from './terms-conditions.component';
import { TermsConditionsRoutingModule } from './terms-conditions.routing';
import { TermsConditionsService } from './terms-conditions.service';

const routes: Routes = [{
    path: "",
    component: DefaultComponent,
    children: [{
        path: "",
        component: TermsConditionsComponent
    }]
}]

@NgModule({
    imports: [ 
        CommonModule, RouterModule.forChild(routes),
        TermsConditionsRoutingModule,
        NgxEditorModule,
        LayoutModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],

    exports: [TermsConditionsComponent],
    declarations: [TermsConditionsComponent],
    providers: [TermsConditionsService],
    entryComponents: []

})
export class TermConditionModule {
}