import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelecaoFilmeComponent } from './selecao-filme/selecao-filme.component';
import { FilmesVencedoresComponent } from './filmes-vencedores/filmes-vencedores.component';
import { BannerSelecaoComponent } from './banner-selecao/banner-selecao.component';
import { BannerVitoriaComponent } from './banner-vitoria/banner-vitoria.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmeService } from './services/FilmeService';

@NgModule({
  declarations: [
    AppComponent,
    SelecaoFilmeComponent,
    FilmesVencedoresComponent,
    BannerSelecaoComponent,
    BannerVitoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
