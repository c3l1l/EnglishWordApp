using EnglishWordApp.DbContexts;
using EnglishWordApp.Dtos;
using EnglishWordApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EnglishWordApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        private readonly IJwt _jwt;

        public AuthController(AppDbContext dbContext, IJwt jwtl, IJwt jwt)
        {
            _dbContext = dbContext;
            _jwt = jwt;
        }

        [HttpPost("[Action]")]
        public CustomResponseDto<TokenModel> UserLogin(UserLoginDto userLoginDto)
        {
            string token = _jwt.Authenticate(userLoginDto.Email, userLoginDto.Password);
            if (token == null)
            {
                //   return Unauthorized("Yetkisiz Kullanim");
                return new CustomResponseDto<TokenModel>() { Errors = new List<string>() {"Email or password is not correct!" }, StatusCode=401 };
            }
            //return Ok(token);
            return new CustomResponseDto<TokenModel> { Data = new TokenModel() { Token = token  }, StatusCode=200 };
        }
        [HttpPost("[Action]")]
        public async Task<IActionResult> Register(UserRegisterDto userRegisterDto)
        {
            var score = CreateScore();
            var user = new User()
            {
                Email = userRegisterDto.Email,
                Name = userRegisterDto.Name,
                Password = userRegisterDto.Password,
                Surname = userRegisterDto.Surname,
                ScoreId = score.Id  
            };
            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();
            return Ok(user);
        }
        [NonAction]
        public Score CreateScore() { 

            var newScore=new Score() { Point = 0, LastScoreDate = DateTime.Now };
            _dbContext.Scores.Add(newScore);
             _dbContext.SaveChanges();
            return newScore;
        }
    }
}
