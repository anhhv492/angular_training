import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NxbRoutingModule } from './nxb-routing.module';
import { NxbComponent } from './nxb.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NxbComponent
  ],
    imports: [
        CommonModule,
        NxbRoutingModule,
        ReactiveFormsModule
    ]
})
export class NxbModule { }
