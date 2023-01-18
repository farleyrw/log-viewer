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
            return Enumerable.Range(1, total).Select(index => new LogMessage
            {
                Id = index,
                App = Apps[Random.Shared.Next(Apps.Length)],
                Timestamp = DateTime.Now.AddDays(-Random.Shared.Next(total)),
                Severity = Levels[Random.Shared.Next(Levels.Length)],
                Server = Servers[Random.Shared.Next(Servers.Length)],
                Message = "I have some information for you"
            });
        }
    }
}