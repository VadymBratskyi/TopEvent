using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Interfaces;

namespace TopEvent.Model.Models
{
    public class Event : IEntity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Descriptions { get; set; }

        public DateTimeOffset BeginDateTime { get; set; }

        public DateTimeOffset EndDateTime { get; set; }

        public int CountPeoples { get; set; }

        public Guid ClientId { get; set; }

        public Client Client { get; set; }

        public Guid TypeId { get; set; }

        public EventType Type { get; set; }
    }
}
