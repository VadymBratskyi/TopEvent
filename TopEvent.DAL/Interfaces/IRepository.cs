using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Models.Base;

namespace TopEvent.DAL.Interfaces
{
    public interface IRepository<TEntity>  where TEntity : class
    {
        IEnumerable<TEntity> Get();
        IEnumerable<TEntity> Get(Func<TEntity, bool> predicate);
        TEntity GetByID(Guid Id);
        void Insert(TEntity item);
        void Update(TEntity item);
        void Delete(Guid id);
    }
}
