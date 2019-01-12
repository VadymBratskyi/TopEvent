using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopEvent.DAL.EF;
using TopEvent.DAL.Interfaces;
using TopEvent.Model.Models;

namespace TopEvent.DAL.Repositories
{
    public class EfUnitOfWork : IUnitOfWork
    {
        private readonly EventDbContext _db;
        private EntityRepository<Client> _clientRepository;
        private EntityRepository<Event> _eventRepository;

        public EfUnitOfWork(EventDbContext context)
        {
            _db = context;
        }


        public EntityRepository<Client> Clients
        {
            get { return _clientRepository ?? (_clientRepository = new EntityRepository<Client>(_db)); }
        }

        public EntityRepository<Event> Events
        {
            get { return _eventRepository ?? (_eventRepository = new EntityRepository<Event>(_db)); }
        }


        public async Task SaveAsync()
        {
            await _db.SaveChangesAsync();
        }

        private bool _disposed;

        public virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _db.Dispose();
                }
                _disposed = true;
            }
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
