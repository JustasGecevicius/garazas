import { useEffect, useState } from "react";
import { columnHelper } from "../functions/fetch/defaults";
import { camelCase } from "lodash";
import { IndeterminateCheckbox } from "../components/checkbox/Checkbox";

export const useVehicleListColumns = (data: any) => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (columns?.length || !data?.data?.length) return;
    const normalCols = Object.keys(data?.data?.[0] || {}).map((key) => {
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
        enableColumnFilter: key !== "id" && key !== "createdAt" && key !== "updatedAt",
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
        enableColumnFilter: false,
      })
    );
    setColumns(normalCols);
  }, [data?.data]);
  return columns;
};
