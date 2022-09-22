import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandocRoutingModule } from './bandoc-routing.module';
import { BandocComponent } from './bandoc.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BandocComponent
  ],
    imports: [
        CommonModule,
        BandocRoutingModule,
        ReactiveFormsModule
    ]
})
export class BandocModule { }
