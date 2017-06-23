import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { MainRoutingModule } from './app.routes';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MainComponent }  from './app.component';
import { TranslationLoaderService}  from './modules/translation/translation.service';


import {locale as english} from './i18n/en';
import {locale as french} from './i18n/fr';
import {locale as portuguese} from './i18n/pt';


@NgModule({
  imports: [BrowserModule, HttpModule, MainRoutingModule, TranslateModule.forRoot()],
  declarations: [ MainComponent],
  bootstrap:    [ MainComponent ],
  providers:[TranslationLoaderService]
})

export class MainModule {
  constructor(private translate: TranslateService, private translationLoader: TranslationLoaderService) {
      this.translate.addLangs(['en', 'pt', 'fr']);
      this.translationLoader.setMainModuleTranslation('en', english, french, portuguese);
  }
}
