using Microsoft.Extensions.Configuration;

namespace CopaFilme.Services.API
{
    public class Configuracao : IConfiguracao
    {
        public Configuracao(IConfiguration configuration)
        {
            Connection = configuration.GetConnectionString("TesteBase");
            UrlApi = configuration.GetSection("UrlFilme").Value;
        }

        public string Connection { get; }
        public string UrlApi { get; }
    }
}
