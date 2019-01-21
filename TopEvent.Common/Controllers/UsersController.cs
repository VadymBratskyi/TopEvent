using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TopEvent.DAL.Repositories;
using TopEvent.Model.Models;
using TopEvent.Model.ViewModels;

namespace TopEvent.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    //[Authorize(Roles = "BossVados")]
    public class UsersController : Controller
    {
        private readonly UserManager<User> _userManager;
        public EfUnitOfWork uw;

        public UsersController(UserManager<User> userManager, EfUnitOfWork efUnit) {
            _userManager = userManager;
            uw = efUnit;
        }


        [HttpGet("[action]")]
        public async  Task<IActionResult> GetAll()
        {
            var data = await _userManager.Users.ToListAsync();
            return Ok(data);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetById(Guid userId)
        {
            if (userId != Guid.Empty)
            {
                var user = await _userManager.FindByIdAsync(userId.ToString());
                if (user != null)
                {
                    return Ok(user);
                }
                else
                {
                    return NotFound(userId);
                }

            }

            return BadRequest(new { errorMessage = "Can't find. User id is Empty" });

        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Create([FromBody]CreateUserViewModel model) {

            if (ModelState.IsValid) {

                User user = new User()
                {
                    Email = model.Email,
                    UserName = model.Email,
                    PhoneNumber = model.Phonenumber                    
                };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded) {

                    var client = new Client()
                    {
                        Id = user.Id,
                        Name = "UserName",
                        Thurname = "UserThurname",
                        Patronymic = "UserPatronymic",
                        Birthday = DateTime.Now,
                        User = user
                    };
                    uw.Clients.Created(client);
                    await uw.SaveAsync();
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }

            return Ok(model);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Edit([FromBody] EditUserViewModel model) {

            if (ModelState.IsValid) {

                User user = await _userManager.FindByIdAsync(model.Id);
                if (user != null)
                {
                    user.Email = model.Email;
                    user.UserName = model.Email;
                    user.PhoneNumber = model.Phonenumber;

                    var result = await _userManager.UpdateAsync(user);
                    if (result.Succeeded) {
                        return Ok("success edit");
                    }
                    else
                    {
                        return BadRequest(ModelState);
                    }
                }
                else {
                    return NotFound(model);
                }

            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Delete(Guid userId) {

            if (userId != Guid.Empty) {
                User user = await _userManager.FindByIdAsync(userId.ToString());
                if (user != null) {
                    var result = await _userManager.DeleteAsync(user);
                    if (result.Succeeded)
                    {
                        return Ok("success delete");
                    }
                    else
                    {
                        return BadRequest(result.Errors);
                    }
                }
            }
            return BadRequest(new { errorMessage = "Can't delete. User id is Empty"});  
        }
    }
}
