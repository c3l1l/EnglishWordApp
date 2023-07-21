namespace EnglishWordApp.Models
{
    public interface IJwt
    {
        string Authenticate(string username, string password);

    }
}
