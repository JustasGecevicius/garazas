import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { IndeterminateCheckbox } from "../components/checkbox/Checkbox";
import { selectTaskListRefetchToggle } from "../redux/slices/vehicleListRefetchSlice";
import { useSelector } from "react-redux";

type Props = {};

const array = [];

const columnHelper = createColumnHelper();

export default function TaskList(props: Props) {
  const navigate = useNavigate();

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState({});
  const [refetchToggle, setRefetchToggle] = useState(false);

  const taskListToggle = useSelector(selectTaskListRefetchToggle);

  const { data, error, isFetching } = useQuery({
    queryKey: ["task_list", pagination, refetchToggle, taskListToggle],
    queryFn: async ({ queryKey }) => {
      const response = await window.select.selectPaginatedTasks({
        page: queryKey[1].pageIndex + 1,
        limit: queryKey[1].pageSize,
      });
      return response;
    },
  });

  console.log("TASKDATa", data);

  const cols = useMemo(() => {
    const normalCols = Object.keys(data?.data?.[0] || {}).map((key) => {
      return columnHelper.accessor(key, {
        cell: (info) => {
          const value = info.getValue();
          switch (typeof value) {
            case "object":
              return JSON.stringify(value);
            default:
              return value;
          }
          return value;
        },
      });
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
    if (selected.length === 0) return;
    selected.forEach((row) => {
      window.delete.deleteTask(row.original.id);
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
      <div className="flex justify-between gap-2 pt-2">
        <div>
          <select
            value={pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-1 text-black border rounded"
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
            className="p-1 border rounded"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
            type="button"
          >
            {"<<"}
          </button>
          <button
            className="p-1 border rounded"
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
            className="p-1 border rounded"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            type="button"
          >
            {">"}
          </button>
          <button
            className="p-1 border rounded"
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
            className="w-16 p-1 text-black border rounded"
          />
        </span>
      </div>
    </div>
  );
}
