using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TopEvent.Model.Models.Base;

namespace TopEvent.Model.Models
{
    public class Client : BaseEtity
    {
        [Key]
        [ForeignKey("User")]
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Thurname { get; set; }

        public string Patronymic { get; set; }

        public DateTime Birthday { get; set; }

        public virtual User User { get; set; }
    }
}
