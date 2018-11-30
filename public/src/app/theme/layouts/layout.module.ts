import { DefaultComponent } from './../pages/default/default.component';
import {NgModule} from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [
LayoutComponent,
HeaderNavComponent,
AsideNavComponent,
FooterComponent,
ScrollTopComponent,
TooltipsComponent,
DefaultComponent,
	],
	exports: [
LayoutComponent,
HeaderNavComponent,
AsideNavComponent,
FooterComponent,
ScrollTopComponent,
TooltipsComponent,
DefaultComponent
	],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class LayoutModule {
}