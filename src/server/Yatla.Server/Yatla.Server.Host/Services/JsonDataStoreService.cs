using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using System.Timers;

namespace Yatla.Server.Services
{
    public sealed class JsonDataStoreService : IDataStore<TodoItem>
    {
        private List<TodoItem> _items;

        private string _file;

        public JsonDataStoreService(string fileLocation, TimeSpan autoSaveEvery)
        {
            _file = fileLocation;
            _items = LoadFromFile().Result;
            var timer = new Timer(autoSaveEvery.TotalMilliseconds);
            timer.Elapsed += SaveToFile;
        }

        private void SaveToFile(object sender, ElapsedEventArgs e)
        {
            var serialised = JsonSerializer.Serialize(_items);
            using (var writer = File.CreateText(_file))
            {
                writer.WriteAsync(serialised).Wait();
            }
        }

        private async Task<List<TodoItem>> LoadFromFile()
        {
            if (!File.Exists(_file))
            {
                return new List<TodoItem>();
            }

            using (var reader = File.OpenText(_file))
            {
                return await JsonSerializer.DeserializeAsync<List<TodoItem>>(reader.BaseStream);
            }
        }

        public async Task<IList<TodoItem>> Get(int skip = 0, int take = int.MaxValue)
        {
            return await Task.Run(() => _items.Skip(skip).Take(take).ToList());
        }

        public async Task Save(TodoItem data)
        {
            await Task.Run(() => { 
                _items.Add(data);
                SaveToFile(null, null);
            });
        }
    }
}
