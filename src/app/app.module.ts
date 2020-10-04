import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import localeRu from '@angular/common/locales/ru';
// import localeRuExtra from '@angular/common/locales/extra/ru';
// import { registerLocaleData, DecimalPipe, CurrencyPipe} from '@angular/common';
// registerLocaleData(localeRu, 'ru', localeRuExtra);


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
