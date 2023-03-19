import { ChangeEventHandler, useState, type ChangeEvent } from 'react';
import DashboardSidebar from 'pnpm/components/specific/DashboardSidebar/DashboardSidebar';
import { useListBooks } from 'pnpm/hooks/common/useListBooks';
import useDebounce from 'pnpm/hooks/common/useDebouncer';

type Props = {};

export default function ListBooks({ }: Props) {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce<string>(search, 700);

  const book = useListBooks({ skip, take, setTotal, text: debouncedSearch });

  const totalPages = Math.ceil(total / take);
  const currentPage = skip / take;
  const startPage = Math.max(0, currentPage - 3);
  const endPage = Math.min(totalPages, currentPage + 3);

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTake(parseInt(event.target.value));
    setSkip(0); // Reset skip to the first page when changing the number of items per page
  };

  const handlePrevPage = () => {
    if (skip - take >= 0) {
      setSkip(skip - take);
    }
  };

  const handleNextPage = () => {
    if (skip + take < total) {
      setSkip(skip + take);
    }
  };


  if (book.isLoading) {
    return <div>Loading...</div>;
  }

  if (book.isError) {
    return <div>Error: {book.error?.message}</div>;
  }

  return (
    <div className='flex flex-row w-full h-screen'>
      <DashboardSidebar />
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-row items-start justify-start w-full min-h-screen">
          <div className="flex flex-col items-start justify-start w-full h-full min-h-screen bg-gray-50">
            <div className="flex flex-col items-start justify-start w-full bg-gray-100 rounded-lg">
              <div className='w-full'>
                <div className="flex flex-row justify-start items-center w-full gap-12">
                  <div className='flex flex-row justify-start items-center gap-2'>
                    <label htmlFor="itemsPerPage" className="mr-2">Itens por página:</label>
                    <select
                      id="itemsPerPage"
                      value={take}
                      onChange={(e) => { handleItemsPerPageChange(e) }}
                      className="bg-white border border-gray-300 py-2 px-3 rounded"
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="Pesquisar"
                    className="bg-white border border-gray-300 py-2 px-3 rounded"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <table className='table-auto border-collapse w-full'>
                  <thead>
                    <tr className='bg-gray-200'>
                      <th className='px-4 py-2'>Título</th>
                      <th className='px-4 py-2'>Autor</th>
                      <th className='px-4 py-2'>Preço</th>
                      <th className='px-4 py-2'>Avaliação</th>
                      <th className='px-4 py-2'>Editora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {book.books?.map((book) => (
                      <tr key={book.id} className='text-center hover:bg-gray-100/50 bg-white'>
                        <td className='border px-4 py-2'>{book.title}</td>
                        <td className='border px-4 py-2'>{book.author?.name || ''}</td>
                        <td className='border px-4 py-2'>{book.price}</td>
                        <td className='border px-4 py-2'>{book.rating}</td>
                        <td className='border px-4 py-2'>{book.publisher?.name || ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 w-full flex flex-row justify-center gap-4">
                <button
                  onClick={handlePrevPage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  disabled={skip === 0}
                >
                  Página anterior
                </button>
                {Array.from({ length: endPage - startPage }, (_, index) => {
                  const pageNum = startPage + index;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setSkip(pageNum * take)}
                      className={`mx-1 py-1 px-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded ${pageNum === currentPage ? 'font-bold' : ''
                        }`}
                    >
                      {pageNum + 1}
                    </button>
                  );
                })}
                <button
                  onClick={handleNextPage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  disabled={currentPage >= totalPages - 1} // Desativa o botão se a próxima página for maior ou igual ao total de páginas
                >
                  Próxima página
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
