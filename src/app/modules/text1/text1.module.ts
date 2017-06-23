import { TranslationLoaderService } from './../translation/translation.service';
import { Text1RoutingModule } from './text1.routes';
import { Text1Component } from './text1.component';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import {locale as english} from './i18n/en';
import {locale as french} from './i18n/fr';
import {locale as portuguese} from './i18n/pt';


@NgModule({
  imports: [
    HttpModule,
    Text1RoutingModule,
    TranslateModule],
    declarations: [
      Text1Component
    ],
    providers:[ TranslationLoaderService ]
})


export class Text1Module {
   constructor(private translate: TranslateService, private translationLoader: TranslationLoaderService) {
      this.translate.addLangs(['en', 'pt', 'fr']);
      this.translationLoader.setFeatureModuleTranslation(english, french, portuguese);
  }
}


