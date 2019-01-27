using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;
using TopEvent.Model.Models;

namespace TopEvent.Model.ViewModels
{
    public class ChangeRoleViewModel
    {
        public Guid UserId { get; set; }
        public string UserEmail { get; set; }
        public List<Role> AllRoles { get; set; }
        public IList<string> UserRoles { get; set; }

        public ChangeRoleViewModel()
        {
            AllRoles = new List<Role>();
            UserRoles = new List<string>();
        }
    }
}
