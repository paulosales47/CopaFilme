using CopaFilme.Application.Interfaces;
using CopaFilme.Application.Services;
using CopaFilme.Domain.Models;
using CopaFilme.Infra.Data.API;
using CopaFilme.Infra.Data.Interfaces;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaFilme.Application.Test
{
    [TestClass]
    public class FilmeServiceTest
    {
        IFilmeService _filmeService;
        IFilmeAPI _filmeAPI;
        private const string URL_API = "https://copadosfilmes.azurewebsites.net/api/filmes";
        private const int QUANTIDADE_FILME_CAMPEONATO = 8;
        private const string ID_FILME_PRIMEIRO_COLOCADO = "tt4154756";
        private const string ID_FILME_SEGUNDO_COLOCADO = "tt3606756";

        [TestInitialize]
        public void Inicializar()
        {
            _filmeAPI = new FilmeAPI(URL_API);
            _filmeService = new FilmeService(QUANTIDADE_FILME_CAMPEONATO, _filmeAPI);
        }

        [TestMethod]
        public async Task DeveRetonar_Vingadores_e_Incriveis2()
        {
            IEnumerable<Filme> filmes = await _filmeAPI.ListarFilmes();

            var filmesSelecionados = filmes.ToList().Take(8);

            IEnumerable<Filme> vencedores = _filmeService.RealizarCampeonato(filmesSelecionados);

            IList<Filme> vencedoresList = vencedores?.ToList();

            Assert.IsNotNull(vencedores);
            Assert.AreEqual(vencedoresList[0].Id, ID_FILME_PRIMEIRO_COLOCADO);
            Assert.AreEqual(vencedoresList[1].Id, ID_FILME_SEGUNDO_COLOCADO);
        }

        [TestMethod]
        public async Task DeveRetonarApenasPrimeiro_e_SegundoColocado()
        {
            IEnumerable<Filme> filmes = await _filmeAPI.ListarFilmes();

            var filmesSelecionados = filmes.ToList().Take(8);

            IEnumerable<Filme> vencedores = _filmeService.RealizarCampeonato(filmesSelecionados);

            IList<Filme> vencedoresList = vencedores?.ToList();

            Assert.IsTrue(vencedoresList.Count == 2);
        }

        [TestMethod]
        public async Task DeveRetonarErro_FilmesSelecionados_Duplicado()
        {
            IEnumerable<Filme> filmes = await _filmeAPI.ListarFilmes();

            var filmesSelecionados = filmes.ToList();

            filmesSelecionados[0] = filmesSelecionados[1];

            Assert.ThrowsException<ArgumentException>(() =>
            {
                IEnumerable<Filme> vencedores = _filmeService.RealizarCampeonato(filmesSelecionados.Take(8));
            });
        }

        [TestMethod]
        public async Task DeveRetonarErro_QuantidadeDeFilmesSelecionadosDiferente_Do_Estabelecido()
        {
            IEnumerable<Filme> filmes = await _filmeAPI.ListarFilmes();

            var filmesSelecionados = filmes.ToList();

            Assert.ThrowsException<ArgumentException>(() =>
            {
                IEnumerable<Filme> vencedores = _filmeService.RealizarCampeonato(filmesSelecionados);
            });
        }

        [TestMethod]
        public void DeveRetonarErro_ListaSelecionadosVazia()
        {
            IEnumerable<Filme> filmesSelecionados = null;

            Assert.ThrowsException<ArgumentNullException>(() =>
            {
                IEnumerable<Filme> vencedores = _filmeService.RealizarCampeonato(filmesSelecionados);
            });
        }

    }
}
