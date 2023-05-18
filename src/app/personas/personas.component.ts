import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent{
  desabilitar = false;
  mensaje = "No se ha agregado ninguna persona";
  titulo = "";

  agregarPersona(){
    this.mensaje = "persona agregada";
  }

  modificarTitulo(event: Event){
    console.log("entre a este metodo mod");
  this.titulo = (<HTMLInputElement>event.target).value;
  }
}
