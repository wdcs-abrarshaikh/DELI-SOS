import { AboutUsComponent } from './about-us.component';
import { DefaultComponent } from './../../default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: AboutUsComponent,

      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: []
})

export class AboutUsRoutingModule { }
