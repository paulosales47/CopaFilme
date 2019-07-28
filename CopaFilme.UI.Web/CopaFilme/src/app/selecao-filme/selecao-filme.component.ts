import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../services/FilmeService';
import { Filme } from '../models/Filme';

@Component({
  selector: 'app-selecao-filme',
  templateUrl: './selecao-filme.component.html',
  styleUrls: ['./selecao-filme.component.css'],
  providers: [FilmeService]
})

export class SelecaoFilmeComponent implements OnInit {

  public filmes: Filme[];
  public filmesSelecionados: string[] = [];
  public filmesVencedores: Filme[];
  public quantidadeFilmesSelecionados: number = 0;
  
  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.filmeService.ListarFilmes().subscribe(
      (filmes: Filme[]) => this.filmes = filmes
    );
  }

  AlterarListaSelecionados(filmeSelecionado: any): void{

    if(filmeSelecionado.checked)
       this.quantidadeFilmesSelecionados++;

    if(this.quantidadeFilmesSelecionados > 8 && filmeSelecionado.checked){
      filmeSelecionado.checked = false;
      this.quantidadeFilmesSelecionados--;
    }
    else if(this.quantidadeFilmesSelecionados <= 8 && filmeSelecionado.checked)
        this.filmesSelecionados.push(filmeSelecionado.id);
    else{
        this.quantidadeFilmesSelecionados--;
        this.filmesSelecionados.splice(this.filmesSelecionados.indexOf(filmeSelecionado.id), 1);
    }
  }

  GerarCampeonato(): void {

    this.filmeService.RealizarCampeonato(this.filmesSelecionados)
      .subscribe(
        (filmesRetorno: Filme[]) => this.filmesVencedores = filmesRetorno,
        (erro: any) => alert(erro.error));
  }


}
