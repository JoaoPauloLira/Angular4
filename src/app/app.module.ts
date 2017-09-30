import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { PrivadoModule } from './privado/privado.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule,
    PrivadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
