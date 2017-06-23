import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';


 @Injectable()
 export class TranslationLoaderService  {
    private currentLanguange: string;

    constructor(private translateService: TranslateService) {
        this.currentLanguange = translateService.currentLang;
    }

   

    public setMainModuleTranslation(lang?: string, ...translations: any[]): void {
        const locales = [...translations];
        locales.forEach( (locale) => {
           this.translateService.setTranslation(locale.Lang, locale.Data, true);
        });
        if (lang != null) {
            this.translateService.use(lang);
            this.currentLanguange = lang;
        }
    }

    public setFeatureModuleTranslation(...translations: any[]): void {
        const locales = [...translations];
        locales.forEach( (locale) => {
            console.log(locale.Data);
           this.translateService.setTranslation(locale.Lang, locale.Data, true);
        });
        console.log(this.currentLanguange);
        this.translateService.use(this.currentLanguange);   
    }

 }