import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MyComponent2.component.tsComponent } from './my-component2.component.ts/my-component2.component.ts.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
    MyComponent2.component.tsComponent
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
