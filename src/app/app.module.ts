import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http} from '@angular/http';
import { MainRoutingModule } from './app.routes';

import { MainComponent }  from './app.component';
import {Translation} from './modules/translation/translation.module';

@NgModule({
  imports: [BrowserModule, HttpModule, MainRoutingModule, Translation],
  declarations: [ MainComponent],
  bootstrap:    [ MainComponent ]
})

export class MainModule {

}
