// import { SignUpService } from './sign-up/sign-up.service';
// import { AuthGuard } from './auth/_guards/auth.guard';
// import { AuthService } from './auth/_services/authentication.service';
// import { BannerModule } from './theme/pages/default/angular/banner/banner.module';
import { HttpModule } from '@angular/http';
import { ScriptLoaderService } from './_services/script-loader.service';
import { AuthModule } from './auth/auth.module';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ThemeRoutingModule } from "./theme/theme-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { InputsModule } from '@progress/kendo-angular-inputs';



// import { ImagesPipe } from './images.pipe';

@NgModule({
  declarations: [
    ThemeComponent,
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    // SignUpComponent,
    ForgotEmailComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeRoutingModule,
    HttpModule,
    HttpClientModule,
    LayoutModule,
    AuthModule,
    ToastrModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule ,
    // Ng4LoadingSpinnerModule.forRoot(),
    InputsModule

  ],
  providers: [ScriptLoaderService],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
