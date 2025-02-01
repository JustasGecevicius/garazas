import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useQuery } from 'react-query';
import { useEffect, useMemo, useState } from 'react';
import { cloneDeep } from 'lodash';

type Props = {};

const array = [];

const columnHelper = createColumnHelper();

export function VehicleList(props: Props) {

  const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 10})
  
  useEffect(() => {
    console.log('PAGINATION', pagination);
  }, [pagination]);
  
  const { data, error, isFetching } = useQuery({
    queryKey: ['vehicle_list', pagination],
    queryFn: async ({ queryKey }) => {

      console.log('QUERY', cloneDeep(queryKey[1]));
      const response = await window.select.selectVehicles({ page: queryKey[1].pageIndex + 1, limit: queryKey[1].pageSize });
      console.log(response);
      return response;
    },
  })
  
  const columns = useMemo(() => Object.keys(data?.data?.[0] || {}).map((key) => {
    return columnHelper.accessor(key, { cell: (info) => info.getValue() })
  }), [data?.data]);

  const emptyTable = useMemo(() => ([]), []);

  const table = useReactTable({
    data: data?.data || array,
    columns: columns || array,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    initialState: { pagination },
    rowCount: data?.total || 0,
    manualPagination: true,

  });

  useEffect(() => {
    console.log(data?.vehicles)
  }, [data?.vehicles]);
  
  return (
    <div className='w-full'>
        <table className='w-full border border-white rounded-md'>
          <thead className='border-b'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='px-2 py-1'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className=''>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='text-center border border-white'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
              <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16 text-black"
          />
        </span>
        <select
          value={pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
          className='text-black border p-1 rounded'
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
