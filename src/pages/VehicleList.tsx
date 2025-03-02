import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { IndeterminateCheckbox } from "../components/checkbox/Checkbox";
import { selectVehicleListRefetchToggle } from "../redux/slices/vehicleListRefetchSlice";
import { useSelector } from "react-redux";

type Props = {};

const array = [];

const columnHelper = createColumnHelper();

export default function VehicleList(props: Props) {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState({});
  const [refetchToggle, setRefetchToggle] = useState(false);

  const { vehicleListToggle } = useSelector(selectVehicleListRefetchToggle);

  const { data, error, isFetching } = useQuery({
    queryKey: ["vehicle_list", pagination, refetchToggle, vehicleListToggle],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectPaginatedVehicles({
        page: queryKey[1].pageIndex + 1,
        limit: queryKey[1].pageSize,
      });
      return response;
    },
  });

  const cols = useMemo(() => {
    const normalCols = Object.keys(data?.data?.[0] || {}).map((key) => {
      return columnHelper.accessor(key, { cell: (info) => info.getValue() });
    });

    normalCols.unshift(
      columnHelper.accessor("checkbox", {
        header: ({ table }) => (
          <IndeterminateCheckbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </div>
        ),
      })
    );

    return normalCols;
  }, [data?.data]);

  const columns = useMemo(() => cols, [cols]);

  const table = useReactTable({
    data: data?.data || array,
    columns: columns || array,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: { pagination, rowSelection },
    rowCount: data?.total || 0,
    manualPagination: true,
    enableRowSelection: true,
  });

  const handleDeleteClick = () => {
    const selected = table.getSelectedRowModel().rows;
    console.log(selected);
    if (selected.length === 0) {
      return;
    }
    selected.forEach((row) => {
      window.delete.deleteVehicle(row.original.id);
    });
    setRefetchToggle((prevState) => !prevState);
    setRowSelection({});
  };

  return (
    <div className="w-full">
      <button
        className="px-2 my-5 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
      <table className="w-full border border-white rounded-md">
        <thead className="border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-2 py-1">
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
            <tr key={row.original.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-center border border-white"
                  onClick={() => {
                    cell?.column?.id !== "checkbox" &&
                      navigate(`/edit-vehicle/${row.original.id}`);
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
          >
            {"<<"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {pagination.pageIndex + 1} of{" "}
              {table.getPageCount().toLocaleString()}
            </strong>
          </span>
          <button
            className="border rounded p-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
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
    </div>
  );
}
