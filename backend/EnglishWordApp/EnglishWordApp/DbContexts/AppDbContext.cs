using EnglishWordApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishWordApp.DbContexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
        {
            
        }
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Word> Words { get; set; }
        public DbSet<Example> Examples { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Score> Scores { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Word>().HasData(
                new Word
                {
                    Id = 1,
                    Expression = "Explanation",
                    Definition = "To make something clear or easy to understand by describing.."
                },
                new Word
                {
                        Id = 2,
                        Expression = "Organize",
                        Definition = "To make arrangements for something to happen",
                },
                    new Word
                    {
                        Id = 3,
                        Expression = "Sloping",
                        Definition = "lying at an angle to the horizontal so that some points on it are higher than others.."
                    }
                );
            modelBuilder.Entity<Example>().HasData(
           new Example { Id = 1, Statement = "Could you give me a quick explanation of how it works?", WordId = 1 },
           new Example { Id = 2, Statement = "What was her explanation for why she was late?", WordId = 1 },
           new Example { Id = 3, Statement = "They organized a meeting between the teachers and students.", WordId = 2 },
           new Example { Id = 4, Statement = "The bedroom is in the attic so it has a sloping ceiling.", WordId = 3 }
                );
            base.OnModelCreating(modelBuilder);
        }
    }
}
