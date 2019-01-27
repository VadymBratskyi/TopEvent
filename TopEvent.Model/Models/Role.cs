using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TopEvent.Model.Models
{
    public class Role: IdentityRole<Guid>
    {
        public string Description { get; set; }

        public Role()
        { }

        public Role(string roleName) : base(roleName)
        {}

    }
}
