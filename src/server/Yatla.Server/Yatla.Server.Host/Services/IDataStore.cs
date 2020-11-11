using System.Collections.Generic;
using System.Threading.Tasks;

namespace Yatla.Server.Host.Services
{
    interface IDataStore<T>
    {
        Task<IList<T>> Get(int skip, int take);

        Task Save(T data);
    }
}
