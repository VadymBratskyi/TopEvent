using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TopEvent.Model.Models;

namespace TopEvent.DAL.EF
{
    public sealed class EventDbContext : IdentityDbContext<User, IdentityRole<Guid>,Guid>
    {
        public EventDbContext(DbContextOptions<EventDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<EventType> EventTypes { get; set; }

    }
}
