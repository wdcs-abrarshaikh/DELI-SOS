
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';

const routes: Routes = [
// {path: 'login', loadChildren: './auth/auth.module#AuthModule'},
	{
		path: 'login',
		component: LoginComponent,
		
	},
	{
		path: 'forgotpassword',
		component: ForgotPasswordComponent,
		
	},
	
	{
		path: '', 
		redirectTo: 'login', 
		pathMatch: 'full'
	},
	{
		path:'forgotemail',
		component:ForgotEmailComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes,{useHash:true})],
	exports: [RouterModule]
})
export class AppRoutingModule { }