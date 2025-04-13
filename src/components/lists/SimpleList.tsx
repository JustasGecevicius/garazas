import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { camelCase } from "lodash";
import { useMemo, useState } from "react";
import { ARRAY, columnHelper } from "../../functions/fetch/defaults";
import { IndeterminateCheckbox } from "../checkbox/Checkbox";

export function SimpleList(props) {
  const { elements, keysToShow, handleDelete } = props;

  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [rowSelection, setRowSelection] = useState({});

  const columns = useMemo(() => {
    const normalCols = Object.keys(elements?.[0] || {}).reduce((prev, curr) => {
      if (!keysToShow?.includes(curr)) return prev;
      prev.push(
        columnHelper.accessor(curr, {
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
        })
      );
      return prev;
    }, []);

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
  }, [elements]);

  const table = useReactTable({
    data: elements || ARRAY,
    columns: columns || ARRAY,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: { pagination, rowSelection },
    rowCount: elements?.length || 0,
    manualPagination: true,
    enableRowSelection: true,
  });

  const handleDeleteClick = () => {
    const selected = table.getSelectedRowModel().rows;
    console.log(selected);
    if (selected.length === 0) return;
    selected.forEach((row) => {
      handleDelete(row.original.id);
    });
  };

  return (
    !!elements?.length && (
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
                  <td key={cell.id} className="text-center border border-white">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="px-2 border border-white rounded-md hover:outline-2 hover:outline-white hover:outline"
          onClick={handleDeleteClick}
          type="button"
        >
          Delete
        </button>
      </>
    )
  );
}
