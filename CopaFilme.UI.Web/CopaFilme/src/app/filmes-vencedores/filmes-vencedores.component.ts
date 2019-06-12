import { Component, OnInit, Input } from '@angular/core';
import { Filme } from '../models/Filme';

@Component({
  selector: 'app-filmes-vencedores',
  templateUrl: './filmes-vencedores.component.html',
  styleUrls: ['./filmes-vencedores.component.css']
})
export class FilmesVencedoresComponent implements OnInit {

  @Input() 
  public filmesVencedores: Filme[]

  constructor() { }

  ngOnInit() {
  }

}
