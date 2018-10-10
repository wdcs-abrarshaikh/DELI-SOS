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
                "path": "admin/getUserList",
                "loadChildren": "./pages/default/angular/user/user.module#UserModule"
            },
            {
                "path": "admin/restaurant",
                "loadChildren": "./pages/default/angular/restaurant/restaurant.module#RestaurantModule"
            },
            
            {
                "path": "index",
                "loadChildren": "./pages/default/index/index.module#IndexModule"
            },
            

        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }