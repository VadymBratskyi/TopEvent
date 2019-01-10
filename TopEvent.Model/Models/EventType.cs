using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Interfaces;

namespace TopEvent.Model.Models
{
    public class EventType : IEntity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public int Code { get; set; }

        public ICollection<Event> Events { get; set; }
    }
}
