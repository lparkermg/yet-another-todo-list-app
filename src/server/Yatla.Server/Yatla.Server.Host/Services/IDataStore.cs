using System.Collections.Generic;
using System.Threading.Tasks;

namespace Yatla.Server.Host.Services
{
    public interface IDataStore<T>
    {
        Task<IList<T>> Get(int skip = 0, int take = int.MaxValue);

        Task Save(T data);
    }
}
