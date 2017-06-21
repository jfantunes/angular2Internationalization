import { Text2RoutingModule } from './text2.routes';
import { Text2Component } from './text2.component';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http} from '@angular/http';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'app/modules/text2/i18n/');
}

@NgModule({
  imports: [
    Text2RoutingModule
  ],
  declarations: [
    Text2Component
  ]
})
export class Text2Module { }