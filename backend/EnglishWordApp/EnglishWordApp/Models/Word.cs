namespace EnglishWordApp.Models
{
    public class Word
    {
        public int Id { get; set; }
        public string Expression { get; set; }
        public string Definition { get; set; }
        public List<Example>? Examples { get; set; }
    }
}
