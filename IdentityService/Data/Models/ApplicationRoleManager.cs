using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityService.Data.Models
{
    public class ApplicationRoleManager : RoleManager<ApplicationRole>
    {
        public IRoleClaimStore<ApplicationRole> _RoleClaimStore;

        public ApplicationRoleManager(IRoleStore<ApplicationRole> store, IEnumerable<IRoleValidator<ApplicationRole>> roleValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, ILogger<RoleManager<ApplicationRole>> logger)
          : base(store, roleValidators, keyNormalizer, errors, logger)
        {
            _RoleClaimStore = (IRoleClaimStore<ApplicationRole>)store;
        }
    }
}
