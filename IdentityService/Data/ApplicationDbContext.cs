using IdentityService.Data.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace IdentityService.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser
        , ApplicationRole
        , Guid
        , ApplicationUserClaim
        , ApplicationUserRole
        , ApplicationUserLogin
        , ApplicationRoleClaim
        , ApplicationUserToken>
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

    }
}
