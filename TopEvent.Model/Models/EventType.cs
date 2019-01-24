using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Models.Base;

namespace TopEvent.Model.Models
{
    public class EventType : BaseEtity
    {
        public string Title { get; set; }

        public int Code { get; set; }

        public ICollection<Event> Events { get; set; }
    }
}
