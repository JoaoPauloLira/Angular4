import { Injectable } from '@angular/core';

@Injectable()
export class ModuloLoginService {

  constructor() { }

  getCursos(){
    return ["C#","Java","AngularJs","Angular4"];
  }



}
