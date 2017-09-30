import { ModuloLoginService } from './modulo-login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloLoginComponent } from './modulo-login.component';
import { PrivadoComponent } from './privado/privado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModuloLoginComponent,
    PrivadoComponent
  ],
  exports: [ModuloLoginComponent],
  providers: [
    ModuloLoginService
  ]
})
export class ModuloLoginModule { }
