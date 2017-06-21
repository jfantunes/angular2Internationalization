import { NanoTranslationService } from './translation.service';
import { NgModule} from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function MainTranslation(http: Http) {
   return new TranslateHttpLoader(http, 'app/i18n/', '.json');
}

@NgModule({
    imports: [
      HttpModule,
      CommonModule,
      TranslateModule.forRoot({
         loader: {
           provide: TranslateLoader,
           useFactory: MainTranslation,
           deps: [Http],
         },
         isolate: false
       })
    ],
    exports: [
      CommonModule,
      TranslateModule
    ],
    providers: [NanoTranslationService]
})

export class Translation {
     constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'pt']);
        translate.setDefaultLang('en');
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang);
    }
}


