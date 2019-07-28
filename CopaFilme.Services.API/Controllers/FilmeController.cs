using CopaFilme.Application.Interfaces;
using CopaFilme.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaFilme.Services.API.Controllers
{
    [ApiVersion("1.0")]
    [ApiExplorerSettings(GroupName = "v1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class FilmeController : ControllerBase
    {
        private readonly IFilmeService _filmeService;

        public FilmeController([FromServices]IFilmeService filmeService)
        {
            _filmeService = filmeService;
        }

        [HttpGet(Name = "GetFilmes")]
        [ProducesResponseType(statusCode: 200, Type = typeof(Task<ActionResult<IEnumerable<Filme>>>))]
        [ProducesResponseType(statusCode: 417, Type = typeof(Exception))]
        public async Task<ActionResult<IEnumerable<Filme>>> Get()
        {
            try
            {
                IEnumerable<Filme> filmes = await _filmeService.ListarFilmes();

                if(filmes.Any())
                    return Ok(filmes);

                return NotFound("Nenhum filme encontrado");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status417ExpectationFailed, ex.Message);
            }


        }

        [HttpPost(Name = "RealizarCampeonato")]
        [ProducesResponseType(statusCode: 200, Type = typeof(Task<ActionResult<IEnumerable<Filme>>>))]
        [ProducesResponseType(statusCode: 417, Type = typeof(Exception))]
        public async Task<ActionResult<IEnumerable<Filme>>> Post([FromBody]IEnumerable<string> filmesSelecionados)
        {
            try
            {
                var filmesVencedores = await _filmeService.RealizarCampeonato(filmesSelecionados);
                return Ok(filmesVencedores);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status417ExpectationFailed, ex.Message);
            }
        }

    }
}
