using System;
using System.Collections.Generic;
using System.Text;
using TopEvent.Model.Interfaces;

namespace TopEvent.Model.Models
{
    public class Client : IEntity
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Thurname { get; set; }

        public string Patronymic { get; set; }

        public DateTime Birthday { get; set; }
    }
}
