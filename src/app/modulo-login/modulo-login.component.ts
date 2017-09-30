import { Component, OnInit } from '@angular/core';

import { ModuloLoginService } from './modulo-login.service';


@Component({
  selector: 'app-modulo-login',
  templateUrl: './modulo-login.component.html',
  styleUrls: ['./modulo-login.component.css']
})
export class ModuloLoginComponent implements OnInit {
 
  nome: string = "João Paulo";
  site: string;

  listaCursos = [];

  constructor(private servico: ModuloLoginService) { 
    this.site = "https://joaoplira.000webhostapp.com";

    this.listaCursos = servico.getCursos();
  }
  
  ngOnInit() {
  }
 


}
