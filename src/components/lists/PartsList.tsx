import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { camelCase } from "lodash";
import { useMemo, useState } from "react";
import { ARRAY } from "../../functions/fetch/defaults";

const columnHelper = createColumnHelper();

export function PartsList(props) {
  const { parts } = props;

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo(() => {
    const normalCols = Object.keys(parts[0] || {}).map((key) => {
      return columnHelper.accessor(key, {
        cell: (info) => {
          const value = info.getValue();
          switch (info.column.id) {
            case "EngineSizeMeasurementType":
            case "FuelType":
            case "VehicleType":
              return value?.[camelCase(info?.column?.id)];
            case "createdAt":
            case "updatedAt":
            case "techInspectionDueDate":
            case "fabricationYear":
              return JSON.stringify(value);
            default:
              return value;
          }
        },
      });
    });

    return normalCols;
  }, [parts]);

  const table = useReactTable({
    data: parts || ARRAY,
    columns: columns || ARRAY,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: { pagination, rowSelection },
    rowCount: parts?.length || 0,
    manualPagination: true,
    enableRowSelection: true,
  });

  return (
    <>
      <table className="w-full border border-white rounded-md">
        <thead className="border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-2 py-1">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.original.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-center border border-white"
                  onClick={() => {
                    // cell?.column?.id !== "checkbox" && navigate(`/edit-vehicle/${row.original.id}`);
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2 justify-between pt-2">
        <div>
          <select
            value={pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="text-black border p-1 rounded"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            type="button"
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            type="button"
          >
            {"<"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            type="button"
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
            type="button"
          >
            {">>"}
          </button>
        </div>
        <span className="flex items-center gap-1">
          Go to page:
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 text-black"
          />
        </span>
      </div>
    </>
  );
}
