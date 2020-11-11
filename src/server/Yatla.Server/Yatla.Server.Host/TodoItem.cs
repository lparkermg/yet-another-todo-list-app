using System;

namespace Yatla.Server.Host
{
    public sealed class TodoItem
    {
        public int Id { get; init; }

        public string Data { get; init; }

        public bool Done { get; set; }

        public DateTime CreatedAt { get; init; }
    }
}
