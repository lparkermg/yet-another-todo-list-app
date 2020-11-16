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
        public async Task<IActionResult> NewItem([FromBody]TodoItem data)
        {
            if (string.IsNullOrWhiteSpace(data.Data))
            {
                return Problem("Data cannot be null, empty or whitespace.", null, 406, "Data Validation Error", "Validation Error");
            }

            await _store.Save(data with { Done = false, CreatedAt = DateTime.Now, Id = Guid.NewGuid() });
            return Ok();
        }

        [HttpPatch]
        public async Task<IActionResult> MarkAsDone(Guid id)
        {
            try
            {
                await _store.Update(id, i => i with { Done = true });
                return Ok();
            }
            catch(KeyNotFoundException knfe)
            {
                return Problem(knfe.Message, null, 404, "Id not found", "Id Error");
            }
            catch(Exception e)
            {
                return Problem(e.Message, null, 500, "Error", "Server Error");
            }
        }

        [HttpPut]
        public async Task<IActionResult> SaveUpdate([FromBody]TodoItem data)
        {
            if (string.IsNullOrWhiteSpace(data.Data))
            {
                return Problem("Data cannot be null, empty or whitespace.", null, 406, "Data Validation Error", "Validation Error");
            }

            try
            {
                await _store.Update(data.Id, i => i with { Data = data.Data, Done = data.Done });
                return Ok();
            }
            catch(KeyNotFoundException knfe)
            {
                return Problem(knfe.Message, null, 404, "Id not found", "Id Error");
            }
            catch(Exception e)
            {
                return Problem(e.Message, null, 500, "Error", "Server Error");
            }
        }
    }
}
