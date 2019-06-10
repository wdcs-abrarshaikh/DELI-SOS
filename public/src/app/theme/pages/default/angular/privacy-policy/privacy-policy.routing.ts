import { PrivacyPolicyComponent } from './privacy-policy.component';
import { DefaultComponent } from './../../default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

const routes: Routes = [{
    path: "",
    component: DefaultComponent,
    children: [{
        path: '',
        component: PrivacyPolicyComponent,
    }]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    providers: []
})

export class PrivacyPolicyRoutingModule { } 