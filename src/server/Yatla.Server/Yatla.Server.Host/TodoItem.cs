using System;
using System.Text.Json.Serialization;

namespace Yatla.Server
{
    public sealed record TodoItem
    {
        public string Data { get; init; }

        public bool Done { get; init; }

        public DateTime CreatedAt { get; init; }
    }
}
