using System.Collections.Generic;
using System.Threading.Tasks;
using CopaFilme.Domain.Models;
using CopaFilme.Infra.Data.Interfaces;
using Microsoft.Extensions.Configuration;

namespace CopaFilme.Infra.Data.API
{
    public class FilmeAPI : APITemplateMethod<Filme>, IFilmeAPI
    {
        public FilmeAPI(IConfiguration configuration) : base(configuration.GetSection("UrlFilme").Value)
        {

        }

        public FilmeAPI(string urlFilme): base(urlFilme)
        {
        }

        public async Task<IEnumerable<Filme>> ListarFilmes()
        {
            return await base.Buscar();
        }
    }
}
