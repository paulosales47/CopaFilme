using System.Collections.Generic;
using System.Threading.Tasks;
using CopaFilme.Domain.Models;

namespace CopaFilme.Application.Interfaces
{
    public interface IFilmeService
    {
        Task<IEnumerable<Filme>> RealizarCampeonato(IEnumerable<string> filmesSelecionados);

        IEnumerable<Filme> RealizarCampeonato(IEnumerable<Filme> filmesSelecionados);

        Task<IEnumerable<Filme>> ListarFilmes();
    }
}