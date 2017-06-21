import { Translation } from './../translation/translation.module';
import { NanoTranslationService } from './../translation/translation.service';
import { Text1RoutingModule } from './text1.routes';
import { Text1Component } from './text1.component';
import { NgModule } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';


import {TranslateService, LangChangeEvent} from '@ngx-translate/core';

@NgModule({
  imports: [
    HttpModule,
    Translation,
    Text1RoutingModule],
    declarations: [
      Text1Component
    ],
    providers:[TranslateService]
})




export class Text1Module {
    
   constructor(translate: TranslateService) {
      // let currentLanguage = translate.defaultLang;
      // this.t=translate;
      // translateService.getTranslationForModule(translate, currentLanguage, 'app/modules/text1/i18n');

       translate.onLangChange.subscribe((event: LangChangeEvent) => {
          console.log("mudei");
           
        });
   }

}




// export class Text1Module {

//    private translate: TranslateService;

//    constructor(translate: TranslateService, private http: Http) {
//       this.translate = translate;
//       this.getJSON('en');
//       translate.onLangChange.subscribe((event: LangChangeEvent) => {
//         this.getJSON(event.lang);
//       });
//    }

//   getJSON(lang: string): void {
//          this.http.get('app/modules/text1/i18n/en.json')
//              .map((translation) => translation.json())
//              .subscribe(
//                 data => this.translate.setTranslation(lang, data, true)
//               );
//      }
// }


