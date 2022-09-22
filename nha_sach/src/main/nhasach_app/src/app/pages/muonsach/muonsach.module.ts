import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuonsachRoutingModule } from './muonsach-routing.module';
import { MuonsachComponent } from './muonsach.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MuonsachComponent
  ],
    imports: [
        CommonModule,
        MuonsachRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class MuonsachModule { }
