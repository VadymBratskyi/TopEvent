using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopEvent.Model.Models;
using TopEvent.DAL.Repositories;
using Microsoft.EntityFrameworkCore;
using TopEvent.Model.Models.Base;

namespace TopEvent.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable  
    {
        EntityRepository<Client> ClientRepository { get; }
        EntityRepository<Event> EventRepository { get; }

        Task SaveAsync();
    }
}
