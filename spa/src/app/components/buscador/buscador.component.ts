import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:any[];

  constructor ( 
    private heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes)
    })

  }

}
