import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent  {

  private nombre: string = 'Zabdiel';
  private apellido:string = 'Hernandez'
  private edad:number = 28;

  getNombre():string{
    return this.nombre;
  }

  getApellido():string{
    return this.apellido;
  }

  getEdad():number{
    return this.edad;
  }

}
