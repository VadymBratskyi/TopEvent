using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TopEvent.DAL.Repositories;

namespace TopEvent.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        public EfUnitOfWork uw;

        public SampleDataController(EfUnitOfWork efUnit)
        {
            uw = efUnit;
        }

        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var ccl = from cl in uw.Clients.GetAll()
                select new WeatherForecast()
                {
                    DateFormatted = cl.Birthday.ToShortDateString(),
                    TemperatureC = cl.Name,
                    TemperatureF = cl.Thurname,
                    Summary = cl.Patronymic
                };

            return ccl;
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public string TemperatureC { get; set; }
            public string Summary { get; set; }

            public string TemperatureF { get; set; }
        }
    }
}
