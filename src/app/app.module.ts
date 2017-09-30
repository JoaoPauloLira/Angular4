import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { ModuloLoginModule } from './modulo-login/modulo-login.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule,
    ModuloLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
