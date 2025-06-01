import type { ReactElement, ReactPortal } from "react";

// Define the select property on the window object
declare global {
  interface Window {
    delete: {
      deleteVehicle: (id: number) => void;
      deleteTask: (id: number) => void;
    };
    create: {
      createVehicle: (x: any) => void;
      createTask: (x: any) => void;
      createTaskPart: (x: any) => void;
    };
    update: {
      updateVehicle: (data: any) => void;
      updateTask: (data: any) => void;
      updatePart: (data: any) => void;
    };
    select: {
      selectVehicle: (id: number, params: { [x: string]: string | number }) => void;
      selectTask: (id: number, params: { [x: string]: string | number }) => void;
      selectEngineSizeMeasurementType: () => Promise<any>;
      selectFuelType: () => Promise<any>;
      selectVehicleType: () => Promise<any>;
      selectPaginatedVehicles: (params: { [x: string]: string | number }) => Promise<any>;
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
