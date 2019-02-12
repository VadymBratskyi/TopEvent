using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using TopEvent.Model.Models;

namespace TopEvent.DAL.Initiliztion
{
    public class RoleInitializer
    {
        public static async Task InitializerAsync(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            string vadosEmail = "vadymbratskyi@gmail.com";
            string password = "P@ssw0rd123";

            if (await roleManager.FindByNameAsync(vadosEmail) == null)
            {
                await roleManager.CreateAsync(new Role("BossVados"));
            }

            if (await roleManager.FindByNameAsync("User") == null)
            {
                await roleManager.CreateAsync(new Role("User"));
            }

            if (await userManager.FindByNameAsync(vadosEmail) == null)
            {
                User bosVados = new User{Email = vadosEmail, UserName = vadosEmail };
                IdentityResult result = await userManager.CreateAsync(bosVados, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(bosVados, "BossVados");
                }
            }
        }

    }
}
