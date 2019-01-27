using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TopEvent.Model.Models;
using TopEvent.Model.ViewModels;


namespace TopEvent.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
  //  [Authorize(Roles = "BossVados")]
    public class RolesController: Controller
    {
        private readonly RoleManager<Role> _roleManager;
        private readonly UserManager<User> _userManager;

        public RolesController(RoleManager<Role> roleManager, UserManager<User> userManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAll()
        {
            var roles = await _roleManager.Roles.ToListAsync();
            return Ok(roles);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Create(string name)
        {
            if (!string.IsNullOrEmpty(name))
            {
                IdentityResult result = await _roleManager.CreateAsync(new Role(name));
                if (result.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    foreach (var identityError in result.Errors)
                    {
                        ModelState.AddModelError(String.Empty, identityError.Description);
                    }
                }
            }
            ModelState.AddModelError(String.Empty, "Role's name is empty or null");
            return BadRequest(ModelState);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Delete(Guid id)
        {
            if (id != Guid.Empty)
            {
                Role role = await _roleManager.FindByIdAsync(id.ToString());
                if (role != null)
                {
                    IdentityResult result = await _roleManager.DeleteAsync(role);
                    if (result.Succeeded)
                    {
                        return Ok();
                    }
                    else
                    {
                        foreach (var identityError in result.Errors)
                        {
                            ModelState.AddModelError(String.Empty, identityError.Description);
                        }
                        return BadRequest(ModelState);
                    }
                }
                else
                {
                    ModelState.AddModelError(String.Empty, "Role not found");
                    return BadRequest(ModelState);
                }

            }

            ModelState.AddModelError(String.Empty, "Role id is Empty");
            return BadRequest(ModelState);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Edit(Guid userId)
        {
            if (userId != Guid.Empty)
            {
                User user = await _userManager.FindByIdAsync(userId.ToString());
                if (user != null)
                {
                    var userRoles = await _userManager.GetRolesAsync(user);
                    var allRoles = _roleManager.Roles.ToList();
                    ChangeRoleViewModel model = new ChangeRoleViewModel()
                    {
                        UserId = user.Id,
                        UserEmail = user.Email,
                        UserRoles = userRoles,
                        AllRoles = allRoles
                    };
                    return Ok(model);
                }
                else
                {
                    ModelState.AddModelError(String.Empty, "User not Found");
                    return BadRequest(ModelState);
                }

            }

            ModelState.AddModelError(String.Empty, "User id is Empty");
            return BadRequest(ModelState);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Edit(Guid userId, List<string> roles)
        {
            if (userId != Guid.Empty)
            {

                User user = await _userManager.FindByIdAsync(userId.ToString());
                if (user != null)
                {
                    var userRoles = await _userManager.GetRolesAsync(user);
                    var allRoles = _roleManager.Roles.ToList();
                    var addedRoles = roles.Except(userRoles);
                    var removeRoles = userRoles.Except(roles);

                    await _userManager.AddToRolesAsync(user, addedRoles);

                    await _userManager.RemoveFromRolesAsync(user, removeRoles);

                    return Ok();
                }
                else
                {
                    ModelState.AddModelError(String.Empty, "User not Found");
                    return BadRequest(ModelState);
                }

            }
            
            ModelState.AddModelError(String.Empty, "User id is Empty");
            return BadRequest(ModelState);
        }
    }
}
