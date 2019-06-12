using CopaFilme.Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CopaFilme.Infra.Data.Interfaces
{
    public interface IFilmeAPI
    {
        Task<IEnumerable<Filme>> ListarFilmes();
    }
}
