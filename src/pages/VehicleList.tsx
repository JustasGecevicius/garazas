import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ListElement } from '../components/vehicleListComponents/listElement';

type Props = {};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('model', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('engine_size', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('vin_code', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('make', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('fuel_type', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('odometer', {
    cell: (info) => info.getValue(),
  }),
];

export function VehicleList(props: Props) {
  const vehicles = [
    {
      name: 'zeba',
    },
    {
      name: 'deba',
    },
    {
      name: 'gaba',
    },
    {
      name: 'nx',
    },
  ];

  const table = useReactTable({
    data: vehicles,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='w-full'>
      {
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
      }
    </div>
  );
}
