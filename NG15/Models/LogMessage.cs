namespace NG15.Models
{
    public class LogMessage
    {
        public int Id { get; set; }

        public DateTime Timestamp { get; set; }

        public string? App { get; set; }

        public string? Message { get; set; }

        public string? Severity { get; set; }

        public string? Server { get; set; }
    }
}