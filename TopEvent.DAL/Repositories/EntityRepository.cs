using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;
using TopEvent.DAL.EF;
using TopEvent.DAL.Interfaces;
using TopEvent.Model.Interfaces;

namespace TopEvent.DAL.Repositories
{
    public class EntityRepository<T> : IRepository<T> where T : class, IEntity
    {
        private readonly EventDbContext _db;

        public EntityRepository(EventDbContext context)
        {
            _db = context;
        }

        public IEnumerable<T> GetAll()
        {
            return _db.Set<T>();
        }

        public T GetById(Guid id)
        {
            return _db.Set<T>().Find(id);
        }

        public IEnumerable<T> Find(Func<T, bool> predicate)
        {
            return _db.Set<T>().Where(predicate).ToList();
        }

        public void Created(T item)
        {
            _db.Set<T>().Add(item); ;
        }

        public void Update(T item)
        {
            _db.Entry(item).State = EntityState.Modified;
        }

        public void Delete(Guid id)
        {
            var entity = _db.Set<T>().Find(id);
            if (entity != null)
            {
                _db.Set<T>().Remove(entity);
            }
        }
    }
}
