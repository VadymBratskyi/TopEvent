using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Interfaces;

namespace TopEvent.Model.Models.Base
{
    public abstract class BaseEtity : IEntity
    {
        public virtual Guid Id { get; set; }
    }
}
