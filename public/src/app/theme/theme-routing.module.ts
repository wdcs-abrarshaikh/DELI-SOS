import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
// import {AuthGuard} from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        // "canActivate": [AuthGuard],
        "children": [

            {
                "path": "admin/banner",
                "loadChildren": "./pages/default/angular/banner/banner.module#BannerModule"
            },
            {
                "path": "admin/menu",
                "loadChildren": "./pages/default/angular/menu/menu.module#MenuModule"
            },
        
            {
                "path": "admin/email-templates",
                "loadChildren": "./pages/default/angular/email-templates/email-templates.module#EmailTemplatesModule"
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
                "path": "admin/about-us",
                "loadChildren": "./pages/default/angular/about-us/about-us.module#AboutUsModule"
            },
            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            {
                "path": "admin/profile",
                "loadChildren": "./pages/default/angular/profile/profile.module#ProfileModule"
            },
            {
           
           
                "path": "admin/privacy-policy",
                "loadChildren": "./pages/default/angular/privacy-policy/privacy-policy.module#PrivacyPolicyModule"
            },
            {
                "path": "admin/terms-conditions",
                "loadChildren": "./pages/default/angular/terms-conditions/terms-conditions.module#TermConditionModule"
            },
            {
                "path": "admin/notifications",
                "loadChildren": "./pages/default/angular/notifications/notifications.module#NotificationsModule"
            }

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }