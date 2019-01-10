using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Interfaces;

namespace TopEvent.DAL.Interfaces
{
    public interface IRepository<T> where T : class, IEntity
    {
        IEnumerable<T> GetAll();
        T GetById(Guid id);
        IEnumerable<T> Find(Func<T, Boolean> predicate);
        void Created(T item);
        void Update(T item);
        void Delete(Guid id);
    }
}
