import { CuisinComponent} from './cuisin.component';
import { DefaultComponent } from './../../default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AddEditcuisinComponent } from './add-editcuisin/add-editcuisin.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
        {
    path: '',
    component: CuisinComponent,
   
  },]
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  providers: []
})

export class CuisinRoutingModule { }
