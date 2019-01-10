using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Models;
using TopEvent.DAL.Repositories;

namespace TopEvent.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        EntityRepository<Client> Clients { get; }
        EntityRepository<Event> Events { get; }
        void Save();
    }
}
