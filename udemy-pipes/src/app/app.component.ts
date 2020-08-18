import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = 'Capitan America';
  nombre2:string = 'DANieL VAZqueZ guerRA';
  array:any = [
    1,
    2,
    3,
    'Daniel',
    true
  ];
  PI:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 1234.5;
  fecha:Date = new Date();
  idioma:string = 'fr';
  videoUrl:string = 'https://www.youtube.com/embed/VyaWCsA4lqs';
  activar:boolean = true;

  heroe = {
    nombre: 'Logan', 
    clave: 'Wolverine',
    edad:500, 
    direccion: {
      calle: 'Primera',
      casa: 20,

    }
  }

  valorPromesa = new Promise<string>((resolve) =>{
    
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);

  });


}
