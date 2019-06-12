using CopaFilme.Domain.Models;
using CopaFilme.Infra.Data.API;
using CopaFilme.Infra.Data.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaFilme.Infra.Data.Test
{
    [TestClass]
    public class FilmeAPITest
    {
        private IFilmeAPI _filmeAPI;
        private const string URL_API = "https://copadosfilmes.azurewebsites.net/api/filmes";
        private const int QUANTIDADE_MINIMA_PARA_REALIZAR_CAMPEONATO = 8;

        [TestInitialize]
        public void Inicializar()
        {
            _filmeAPI = new FilmeAPI(URL_API);
        }

        [TestMethod]
        public async Task DeveRetornar_ListaFilmeAPI()
        {
            IEnumerable<Filme> filmes = await _filmeAPI.ListarFilmes();

            Assert.IsNotNull(filmes);
        }

        [TestMethod]
        public async Task DeveRetornarQuantidadeMinimaParaCampeonato_ListaFilmeAPI()
        {
            IEnumerable<Filme> filmes = await _filmeAPI.ListarFilmes();

            Assert.IsTrue(filmes.ToList().Count >= QUANTIDADE_MINIMA_PARA_REALIZAR_CAMPEONATO);
        }


    }
}
