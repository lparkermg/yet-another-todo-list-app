using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yatla.Server.Services;

namespace Yatla.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public sealed class TodoController : ControllerBase
    {
        private readonly ILogger<TodoController> _logger;
        private readonly IDataStore<TodoItem> _store;

        public TodoController(ILogger<TodoController> logger, IDataStore<TodoItem> dataStore)
        {
            _logger = logger;
            _store = dataStore;
        }

        [HttpGet]
        public async Task<IEnumerable<TodoItem>> Get()
        {
            return await _store.Get();
        }

        [HttpPost]
        public async Task Post([FromBody]TodoItem data)
        {
            await _store.Save(data with { Done = false, CreatedAt = DateTime.Now});
        }
    }
}
