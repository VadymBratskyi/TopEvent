using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TopEvent.Model.Models
{
    public class User : IdentityUser<Guid>
    {
        public virtual Client Client { get; set; }
    }
}
