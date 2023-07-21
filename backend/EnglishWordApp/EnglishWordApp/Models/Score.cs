using System.Text.Json.Serialization;

namespace EnglishWordApp.Models
{
    public class Score
    {
        public int Id { get; set; }
        public decimal Point { get; set; }
        public DateTime LastScoreDate { get; set; }= DateTime.Now;
        [JsonIgnore]
        public User? User { get; set; }

    }
}
