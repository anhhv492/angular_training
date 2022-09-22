import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxbComponent } from './nxb.component';

const routes: Routes = [{ path: '', component: NxbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NxbRoutingModule { }
