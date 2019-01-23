using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TopEvent.Model.Models;
using Microsoft.AspNetCore.Identity;
using TopEvent.DAL.Repositories;
using TopEvent.Model.ViewModels;


namespace TopEvent.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        public EfUnitOfWork uw;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, EfUnitOfWork efUnit)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            uw = efUnit;
        }

        [HttpGet("[action]")]
        public IEnumerable<Client> GetClients()
        {
            return uw.Clients.GetAll();
        }


        [HttpPost("[action]")]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = new User()
                {
                    Email = model.Email,
                    UserName = model.Email,
                    PhoneNumber = model.Phonenumber
                };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    await _signInManager.SignInAsync(user, false);
                    var client = new Client()
                    {
                        Id = user.Id,
                        Name = model.Name,
                        Thurname = model.Thurname,
                        Patronymic = model.Patronymic,
                        Birthday = model.Birthday,
                        User = user
                    };
                    uw.Clients.Created(client);
                    await uw.SaveAsync();
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
                return BadRequest(ModelState);
            }
            
            return Ok(model);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login([FromBody]LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result =
                    await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, false);
                if (result.Succeeded)
                {
                    if (!string.IsNullOrEmpty(model.ReturnUrl) && Url.IsLocalUrl(model.ReturnUrl))
                    {
                        return Json(model);
                    }
                }
                else
                {
                    ModelState.AddModelError(String.Empty, "Неправильный логин и (или) пароль");
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
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}
