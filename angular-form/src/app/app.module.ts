import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
  ],
  imports: [
    BrowserModule,
  FormsModule,  
      BrowserModule, NgbModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
