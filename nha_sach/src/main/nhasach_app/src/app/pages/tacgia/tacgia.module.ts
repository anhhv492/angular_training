import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacgiaRoutingModule } from './tacgia-routing.module';
import { TacgiaComponent } from './tacgia.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TacgiaComponent
  ],
    imports: [
        CommonModule,
        TacgiaRoutingModule,
        ReactiveFormsModule
    ]
})
export class TacgiaModule { }
