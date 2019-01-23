using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TopEvent.Model.ViewModels
{
    public class ChangePasswordViewModel
    {
        public string Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string NewPassword { get; set; }
        [Required]
        public string OldPassword { get; set; }
    }
}
