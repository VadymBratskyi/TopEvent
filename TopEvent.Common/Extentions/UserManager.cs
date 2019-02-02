using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TopEvent.Model.Models;

namespace TopEvent.Common.Extentions
{
    class EventUserManager : UserManager<User>
    {
        public EventUserManager(IUserStore<User> store, 
            IOptions<IdentityOptions> optionsAccessor, 
            IPasswordHasher<User> passwordHasher, 
            IEnumerable<IUserValidator<User>> userValidators, 
            IEnumerable<IPasswordValidator<User>> passwordValidators, 
            ILookupNormalizer keyNormalizer, 
            IdentityErrorDescriber errors, 
            IServiceProvider services, 
            ILogger<UserManager<User>> logger) 
            : base(store, optionsAccessor, 
                  passwordHasher, userValidators, 
                  passwordValidators, keyNormalizer, 
                  errors, services, logger)
        {
            
        }

        
    }
}
