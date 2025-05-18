import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { selectVehicleListRefetchToggle } from "../redux/slices/vehicleListRefetchSlice";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { ARRAY } from "../functions/fetch/defaults";
import { TextInput } from "../components/Inputs/TextInput";
import { useVehicleListColumns } from "../hooks/vehicleListHooks";

type Props = {};

export default function VehicleList(props: Props) {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState({});
  const [refetchToggle, setRefetchToggle] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const vehicleListToggle = useSelector(selectVehicleListRefetchToggle);

  const setColumnFiltersDebounce = useMemo(() => debounce(setColumnFilters, 500), []);

  const { data } = useQuery({
    queryKey: ["vehicle_list", pagination, refetchToggle, vehicleListToggle, columnFilters],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectPaginatedVehicles({
        page: queryKey[1].pageIndex + 1,
        limit: queryKey[1].pageSize,
        include: ["VehicleType", "FuelType", "EngineSizeMeasurementType"],
        filters: columnFilters,
      });
      return response;
    },
  });

  const columns = useVehicleListColumns(data);

  const table = useReactTable({
    data: data?.data || ARRAY,
    columns: columns || ARRAY,
    filterFns: {},
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: { pagination, rowSelection, columnFilters },
    onColumnFiltersChange: setColumnFiltersDebounce,
    rowCount: data?.total || 0,
    manualPagination: true,
    manualFiltering: true,
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
        className="px-2 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline"
        onClick={handleDeleteClick}
        type="button"
      >
        Delete
      </button>
      <table className="w-full border border-white rounded-md">
        <thead className="border-b">
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} className="px-2 py-1">
                      <div>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanFilter() ? (
                          <TextInput
                            name={header.column.id}
                            value={header.column.getFilterValue()}
                            modificationCallback={header.column.setFilterValue}
                          />
                        ) : null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.original.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-center border border-white"
                  onClick={() => {
                    cell?.column?.id !== "checkbox" && navigate(`/edit-vehicle/${row.original.id}`);
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
    </div>
  );
}
