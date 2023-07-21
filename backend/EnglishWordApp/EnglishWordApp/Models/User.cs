namespace EnglishWordApp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string? Role { get; set; }
        public string Email { get; set; }
        //Example password will hash it!!
        public string Password { get; set; }
        public int? ScoreId { get; set; }
        public Score? Score { get; set; }
    }
}
