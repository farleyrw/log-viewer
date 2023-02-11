using Bogus;
using Microsoft.AspNetCore.Mvc;
using NG15.Models;

namespace NG15.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LogMessageController : ControllerBase
    {
        private static readonly string[] Levels = new[]
        {
            "debug", "info", "warn", "error"
        };

        private static readonly string[] Apps = new[]
        {
            "web", "api", "mobile"
        };

        private static readonly string[] Servers = new[]
        {
            "web01", "web02", "web03"
        };

        private readonly ILogger<LogMessageController> _logger;

        public LogMessageController(ILogger<LogMessageController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<LogMessage> Get()
        {
            int total = 10;

            var testUsers = new Faker<LogMessage>()
                .RuleFor(l => l.Id, f => f.UniqueIndex)
                .RuleFor(l => l.App, f => f.PickRandom(Apps))
                .RuleFor(l => l.Timestamp, f => f.Date.Past(1))
                .RuleFor(l => l.Severity, f => f.PickRandom(Levels))
                .RuleFor(l => l.Server, f => f.PickRandom(Servers))
                .RuleFor(l => l.Message, f => f.System.Exception().ToString());


            return testUsers.GenerateBetween(total, total*2);
        }
    }
}