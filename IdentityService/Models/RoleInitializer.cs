using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using IdentityService.Data.Models;
using Microsoft.AspNetCore.Identity;


namespace IdentityService.Models
{
    public class RoleInitializer
    {
        public static async Task InitializerAsync(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager)
        {
            string vadosEmail = "vadymbratskyi@gmail.com";
            string password = "P@ssw0rd123";

            if (await roleManager.FindByNameAsync(vadosEmail) == null)
            {
                await roleManager.CreateAsync(new ApplicationRole("bossVados"));
            }

            if (await roleManager.FindByNameAsync("user") == null)
            {
                await roleManager.CreateAsync(new ApplicationRole("user"));
            }

            if (await userManager.FindByNameAsync(vadosEmail) == null)
            {
                ApplicationUser bosVados = new ApplicationUser { Email = vadosEmail, UserName = vadosEmail };
                IdentityResult result = await userManager.CreateAsync(bosVados, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(bosVados, "bossVados");
                }
            }
        }

    }
}
