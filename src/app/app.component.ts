import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html',
})
export class MainComponent  {
  constructor(private translate: TranslateService){

  }

}
