import { Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';


 @Injectable()
 export class NanoTranslationService  {
    http: Http;
    private translateService: TranslateService;
    private currentLanguage: string;

    constructor(http: Http, translateService: TranslateService){
        this.translateService = translateService;
        this.http = http;
    }


    public createTranslationServiceForModule(): TranslateService{
        const newTranslateService = Object.assign({}, this.translateService);
        return newTranslateService;
    }

    public getTranslationForModule(translate: TranslateService, lang: string, path: string): void {
         this.getLanguage(translate, path, lang);
    }

    private getLanguage(translate: TranslateService, lang: string, path: string): void {
         console.log("mudou");
         this.http.get(lang + '/' + path + '.json')
             .map((translation) => translation.json())
             .subscribe(
                data => translate.setTranslation(lang, data, true)
              );
     }

 }