import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http} from '@angular/http';
import { MainRoutingModule } from './app.routes';

import { MainComponent }  from './app.component';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'i18n/', '.json');
}

@NgModule({
  imports:      [ BrowserModule, MainRoutingModule, 
      TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        }) ],
  declarations: [ MainComponent],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
