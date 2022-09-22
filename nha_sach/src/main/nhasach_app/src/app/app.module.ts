import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ToastrModule } from 'ngx-toastr';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ColorPickerService } from 'ngx-color-picker';
import { httpInterceptorProviders } from './shared/helpers/http.interceptor';
import { HttpClientModule } from '@angular/common/http';
import {TacGiaService} from "./services/tacgia.service";
import {NxbService} from "./services/nxb.service";
import {BanDocService} from "./services/bandoc.service";
import {DatePipe} from "@angular/common";
import {SachService} from "./services/sach.service";
import {MuonSachService} from "./services/muonsach.service";
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        FormsModule, ReactiveFormsModule,
        ToastrModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        SimpleNotificationsModule.forRoot(),
        HttpClientModule, SharedModule
    ],
  providers: [
      ColorPickerService,
      httpInterceptorProviders,
      NxbService,TacGiaService,BanDocService,SachService,MuonSachService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
