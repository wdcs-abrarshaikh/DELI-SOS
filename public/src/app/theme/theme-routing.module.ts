import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "../auth/_guards/auth.guard";


const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            
            {
                "path": "admin/getUserList",
                "loadChildren": "./pages/default/angular/user/user.module#UserModule"
            },
            {
                "path": "admin/restaurant",
                "loadChildren": "./pages/default/angular/restaurant/restaurant.module#RestaurantModule"
            },
            {
                "path": "admin/profile",
                "loadChildren": "./pages/default/angular/profile/profile.module#ProfileModule"
            },
            {
                "path": "admin/about-us",
                "loadChildren": "./pages/default/angular/about-us/about-us.module#AboutUsModule"
            },
            {
                "path": "admin/privacy-policy",
                "loadChildren": "./pages/default/angular/privacy-policy/privacy-policy.module#PrivacyPolicyModule"
            },
            {
                "path":"admin/contact-us",
                "loadChildren":"./pages/default/angular/contact-us/contact-us.module#ContactUsModule"
            },
            {
                "path":"admin/cuisines",
                "loadChildren":"./pages/default/angular/cuisin/cuisin.module#CuisinModule"
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }