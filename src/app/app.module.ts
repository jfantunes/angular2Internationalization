import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http} from '@angular/http';
import { MainRoutingModule } from './app.routes';

import { MainComponent }  from './app.component';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'app/i18n/', '.json');
}

@NgModule({
  imports: [BrowserModule,
  HttpModule,
  MainRoutingModule,
  TranslateModule.forRoot({
    loader: {
       provide: TranslateLoader,
       useFactory: HttpLoaderFactory,
       deps: [Http]
          }
    })
    ],
  declarations: [ MainComponent],
  bootstrap:    [ MainComponent ]
})

export class MainModule {
  constructor(translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'pt']);
        let browserLang = translate.getBrowserLang();
        translate.setDefaultLang('en');
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
