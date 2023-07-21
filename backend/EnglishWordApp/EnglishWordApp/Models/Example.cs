using System.Text.Json.Serialization;

namespace EnglishWordApp.Models
{
    public class Example
    {
        public int Id { get; set; }
        public string Statement { get; set; }
        public int WordId { get; set; }
        [JsonIgnore]
        public Word? Word { get; set; }
    }
}
