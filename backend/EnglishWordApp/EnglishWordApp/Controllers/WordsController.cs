using EnglishWordApp.DbContexts;
using EnglishWordApp.Dtos;
using EnglishWordApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EnglishWordApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        public WordsController(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<CustomResponseDto<List<Word>>> GetAll()
        {
            var words = await _dbContext.Words.Include(x => x.Examples).ToListAsync();
            if (words.Count > 0)
            {
                var customResponseDto = new CustomResponseDto<List<Word>>();
                customResponseDto.Data = words;
                customResponseDto.StatusCode = 200;
                //  return Ok(words);
                return customResponseDto;
            }
            return new CustomResponseDto<List<Word>>() { Errors = new List<string>() { "Data not found!" }, StatusCode = 404 };

        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<CustomResponseDto<Word>> GetById(int id)
        {
            var word = await _dbContext.Words.FindAsync(id);
            if (word != null)
            {
                var customResponseDto = new CustomResponseDto<Word>();
                customResponseDto.Data = word;
                customResponseDto.StatusCode = 200;
                //  return Ok(words);
                return customResponseDto;
            }
            return new CustomResponseDto<Word>() { Errors = new List<string>() { $"Id:{id} not found!" }, StatusCode = 404 };

        }
        [HttpPost]
        public async Task<CustomResponseDto<Word>> Add(WordAddDto wordAddDto)
        {
            var word = new Word
            {
                Definition = wordAddDto.Definition,
                Expression = wordAddDto.Expression
            };
            try
            {
                await _dbContext.Words.AddAsync(word);
                await _dbContext.SaveChangesAsync();
                return new CustomResponseDto<Word>() { Data = word, StatusCode = 200 };
            }
            catch (Exception)
            {

                return new CustomResponseDto<Word>() { Errors = new List<string>() { $"Something went wrong!" }, StatusCode = 404 };
            }
        }
        [HttpDelete("{id}")]
        public async Task<CustomResponseDto<NoContentResult>> Add(int id)
        {
            try
            {
                var word = await _dbContext.Words.SingleOrDefaultAsync(x => x.Id == id);
                if (word != null)
                {
                    _dbContext.Words.Remove(word);
                    _dbContext.SaveChanges();
                    return new CustomResponseDto<NoContentResult>() { StatusCode = 200 };

                }
                return new CustomResponseDto<NoContentResult>() { Errors = new List<string>() { $"{id} not found!" }, StatusCode = 404 };
            }
            catch (Exception)
            {
                return new CustomResponseDto<NoContentResult>() { Errors = new List<string>() { $"Something went wrong!" }, StatusCode = 500 };


            }
        }
        [HttpPut]
        public async Task<CustomResponseDto<Word>> Update(WordUpdateDto wordUpdateDto)
        {
            var word = new Word
            {
                Id=wordUpdateDto.Id,
                Definition = wordUpdateDto.Definition,
                Expression = wordUpdateDto.Expression
            };
            try
            {
                 _dbContext.Words.Update(word);
                 _dbContext.SaveChanges();
                return new CustomResponseDto<Word>() { Data = word, StatusCode = 200 };
            }
            catch (Exception)
            {

                return new CustomResponseDto<Word>() { Errors = new List<string>() { $"Something went wrong!" }, StatusCode = 404 };
            }
        }
    }
}

