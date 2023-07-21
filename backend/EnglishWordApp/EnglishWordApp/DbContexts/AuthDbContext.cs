using EnglishWordApp.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishWordApp.DbContexts
{
    public class AuthDbContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=.;Database=EnglishWordApp;Trusted_Connection=True;");
            base.OnConfiguring(optionsBuilder);
        }
    }
}
