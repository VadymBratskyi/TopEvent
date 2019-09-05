using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityService.Data
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ApplicationDbContext>
    {
        public ApplicationDbContext CreateDbContext(string[] args)
        {
            var contextOptionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
            contextOptionsBuilder.UseSqlServer(
                "Data Source=.;Initial Catalog=MyTopEvent_IdentityService_is4;Integrated Security=True;");

            return new ApplicationDbContext(contextOptionsBuilder.Options);
        }
    }
}
