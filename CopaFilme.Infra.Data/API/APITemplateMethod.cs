using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace CopaFilme.Infra.Data.API
{
    public class APITemplateMethod<T>
    {
        private readonly string _urlRequisicao;

        public APITemplateMethod(string urlRequisicao)
        {
            _urlRequisicao = urlRequisicao;
        }

        public async virtual Task<IEnumerable<T>> Buscar()
        {
            var cliente = new HttpClient();

            cliente.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpRequestMessage requisicao = new HttpRequestMessage(HttpMethod.Get, _urlRequisicao);
            HttpResponseMessage resposta = await cliente.SendAsync(requisicao);
            string retornoAPI = await resposta.Content.ReadAsStringAsync();

            if (resposta.StatusCode == HttpStatusCode.OK)
            {
                var objetoRetornoAPI = JsonConvert.DeserializeObject<IEnumerable<T>>(retornoAPI);
                return objetoRetornoAPI;
            }

            throw new HttpRequestException(retornoAPI);
        }


    }
}
