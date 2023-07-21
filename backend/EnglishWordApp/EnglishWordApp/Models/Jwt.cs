using EnglishWordApp.DbContexts;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;

namespace EnglishWordApp.Models
{
    public class Jwt :IJwt
    {
        private string _key;
       

        public Jwt(string key)
        {
            _key = key;
            
        }
       
        public string Authenticate(string email, string password)
        {
            string strToken = null;
            AuthDbContext _dbContext = new AuthDbContext();
            User user = _dbContext.Users.Where(u => u.Email == email && u.Password == password).SingleOrDefault();
            if (user != null)
            {
                var tokenHandler = new System.IdentityModel.Tokens.Jwt.JwtSecurityTokenHandler();
                var bytKey = Encoding.UTF8.GetBytes(_key); //Disaridan gelen Key degeri Byte dizisine cevrilir.

                var tokenDesc = new SecurityTokenDescriptor()
                {
                    Subject = new ClaimsIdentity(new Claim[] { new Claim(ClaimTypes.Name, email) }),
                    Expires = DateTime.Now.AddHours(1),  //1 saat token gecerlilik suresi.
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(bytKey), SecurityAlgorithms.HmacSha256Signature) //Hangi sifreleme algoritmasinin kullanilcagi tanimlanir.
                };

                var token = tokenHandler.CreateToken(tokenDesc); //Token descriptor bilgileri kullanilarak Token burada olusturulur.
                strToken = tokenHandler.WriteToken(token);
            }

            return strToken;
        }
    }
}
