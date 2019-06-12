using Newtonsoft.Json;

namespace CopaFilme.Domain.Models
{
    public class Filme
    {
        public Filme(string id, string titulo, short anoLancamento, float nota)
        {
            Id = id;
            Titulo = titulo;
            AnoLancamento = anoLancamento;
            Nota = nota;
        }
        [JsonProperty("Id")]
        public string Id { get; set; }

        [JsonProperty("Titulo")]
        public string Titulo { get; set; }

        [JsonProperty("Ano")]
        public short AnoLancamento { get; set; }

        [JsonProperty("Nota")]
        public float Nota { get; set; }
    }
}
