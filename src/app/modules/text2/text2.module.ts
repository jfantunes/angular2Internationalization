import { TranslationLoaderService } from './../translation/translation.service';
import { Text2RoutingModule } from './text2.routes';
import { Text2Component } from './text2.component';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

import {locale as english} from './i18n/en';
import {locale as french} from './i18n/fr';
import {locale as portuguese} from './i18n/pt';


@NgModule({
  imports: [
    Text2RoutingModule,
    TranslateModule
  ],
  declarations: [
    Text2Component,
  ],
  providers:[ TranslationLoaderService ]
})


export class Text2Module {
   constructor(private translate: TranslateService, private translationLoader: TranslationLoaderService) {
      this.translate.addLangs(['en', 'pt', 'fr']);
      this.translationLoader.setFeatureModuleTranslation(english, french, portuguese);
  }
}
