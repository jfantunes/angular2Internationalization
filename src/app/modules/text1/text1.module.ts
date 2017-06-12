import { TranslateModule } from '@ngx-translate/core';
import { Text1RoutingModule } from './text1.routes';
import { Text1Component } from './text1.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports:[
   Text1RoutingModule, TranslateModule
  ],
  declarations:[
    Text1Component
  ]
})
export class Text1Module { }