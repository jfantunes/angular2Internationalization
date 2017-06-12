import { Text2RoutingModule } from './text2.routes';
import { Text2Component } from './text2.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    Text2RoutingModule,TranslateModule
  ],
  declarations: [
    Text2Component
  ]
})
export class Text2Module { }