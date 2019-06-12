using CopaFilme.Application.Interfaces;
using CopaFilme.Domain.Models;
using CopaFilme.Infra.Data.Interfaces;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaFilme.Application.Services
{
    public class FilmeService : IFilmeService
    {
        private readonly int _quantidadeFilmesCampeonato;
        private readonly IFilmeAPI _filmeAPI;

        public FilmeService(IConfiguration configuration, IFilmeAPI filmeAPI)
        {
            _quantidadeFilmesCampeonato = int.Parse(configuration.GetSection("QuantidadeFilmesCampeonato").Value);
            _filmeAPI = filmeAPI;
        }

        public FilmeService(int quantidadeFilmesCampeonato, IFilmeAPI filmeAPI)
        {
            _quantidadeFilmesCampeonato = quantidadeFilmesCampeonato;
            _filmeAPI = filmeAPI;
        }

        public async Task<IEnumerable<Filme>> ListarFilmes()
        {
            return await _filmeAPI.ListarFilmes();
        }

        public async Task<IEnumerable<Filme>> RealizarCampeonato(IEnumerable<string> filmesSelecionados)
        {
            List<Filme> filmesDisputaCampeonato = await ConverterIdFilmeParaFilme(filmesSelecionados);

            return RealizarProcessamentoCampeonato(filmesDisputaCampeonato);
        }

        public IEnumerable<Filme> RealizarCampeonato(IEnumerable<Filme> filmesSelecionados)
        {
            return RealizarProcessamentoCampeonato(filmesSelecionados.ToList());
        }

        private IEnumerable<Filme> RealizarProcessamentoCampeonato(List<Filme> filmesDisputaCampeonato)
        {
            ValidaFilmesCampeonato(filmesDisputaCampeonato);

            Filme[] filmesDisputaOrdenados = filmesDisputaCampeonato.OrderBy(filme => filme.Titulo).ToArray();
            Filme[] filmesVencedores = new Filme[_quantidadeFilmesCampeonato / 2];
            
            for (int i = 0; i < (_quantidadeFilmesCampeonato / 2); i++)
            {
                filmesVencedores[i] = RealizarDisputaEntreFilmes(filmesDisputaOrdenados[i], filmesDisputaOrdenados[_quantidadeFilmesCampeonato - 1 - i]);
            }

            for (int i = 0; i < (_quantidadeFilmesCampeonato / 4); i++)
            {
                filmesVencedores[i] = RealizarDisputaEntreFilmes(filmesVencedores[i], filmesVencedores[i + 1]);
            }

            Filme vencedor = RealizarDisputaEntreFilmes(filmesVencedores[0], filmesVencedores[1]);
            
            if(vencedor.Id.Equals(filmesVencedores[0].Id))
                return new Filme[] { filmesVencedores[0], filmesVencedores[1] };

            return new Filme[] { filmesVencedores[1], filmesVencedores[0] };
        }

        private async Task<List<Filme>> ConverterIdFilmeParaFilme(IEnumerable<string> filmesSelecionados)
        {
            var filmesDisputaCampeonato = new List<Filme>();
            var filmesDisponiveis = await this.ListarFilmes();

            foreach (var filmeId in filmesSelecionados)
            {
                filmesDisputaCampeonato.Add(filmesDisponiveis.FirstOrDefault(filme => filme.Id.Equals(filmeId)));
            }

            return filmesDisputaCampeonato;
        }

        private void ValidaFilmesCampeonato(IList<Filme> filmesDisputaCampeonato)
        {
            if (filmesDisputaCampeonato is null)
                throw new ArgumentException("Ocorreu um erro ao realizar o campeonato recarregue a pagina e\\ou tente novamente mais tarde");

            if (filmesDisputaCampeonato.Count != _quantidadeFilmesCampeonato)
                throw new ArgumentException("A quantidade de filmes selecionados é invalida");
        }

        private Filme RealizarDisputaEntreFilmes(Filme filme1, Filme filme2)
        {
            if (filme1.Nota == filme2.Nota)
            {
                int resultadoComparacaoTitulo = filme1.Titulo.CompareTo(filme2.Titulo);

                if (resultadoComparacaoTitulo == 0)
                    throw new ArgumentException("Existem dois filmes com a mesma nota e titulo selecionados para o campeonato");
                else if (resultadoComparacaoTitulo < 0)
                    return filme1;

                return filme2;
            }
            else if (filme1.Nota > filme2.Nota)
                return filme1;

            return filme2;

        }
    }
}
