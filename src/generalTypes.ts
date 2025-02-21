import type { ReactElement, ReactPortal } from "react";

// Define the select property on the window object
declare global {
  interface Window {
    delete: {
      deleteVehicle: () => void;
      deleteTask: () => void;
    };
    create: {
      createVehicle: () => void;
      createTask: () => void;
    };
    update: {
      updateVehicle: () => void;
      updateTask: () => void;
    };
    select: {
      selectVehicle: () => void;
      selectTask: () => void;
      selectEngineSizeMeasurementType: () => Promise<any>;
      selectFuelType: () => Promise<any>;
      selectVehicleType: () => Promise<any>;
      selectPaginatedVehicle: () => Promise<any>;
      selectPaginatedTasks: () => Promise<any>;
      selectAllVehicles: () => Promise<any>;
      selectAllTasks: () => Promise<any>;
    };
  }
}

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type BaseProps = {
  children: ReactNode;
};
