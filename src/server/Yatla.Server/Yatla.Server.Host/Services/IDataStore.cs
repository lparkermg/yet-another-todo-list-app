using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Yatla.Server.Services
{
    public interface IDataStore<T>
    {
        Task<IList<T>> Get(int skip = 0, int take = int.MaxValue);

        Task Update(Guid id, Func<T, T> updateAction);

        Task Save(T data);
    }
}
