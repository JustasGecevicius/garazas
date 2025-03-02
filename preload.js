const { contextBridge, ipcRenderer } = require("electron");
const { CHANNELS } = require("./channels");
const { TABLES } = require("./tablesList");

contextBridge.exposeInMainWorld("delete", {
  deleteVehicle: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, TABLES.Vehicles, id);
  },
  deleteTask: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, TABLES.Tasks, id);
  },
});

contextBridge.exposeInMainWorld("create", {
  createVehicle: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, TABLES.Vehicles, data);
  },
  createTask: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, TABLES.Tasks, data);
  },
});

contextBridge.exposeInMainWorld("update", {
  updateVehicle: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, TABLES.Vehicles, data);
  },
  updateTask: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, TABLES.Tasks, data);
  },
});

contextBridge.exposeInMainWorld("select", {
  selectVehicle: (id) => {
    return ipcRenderer.invoke(CHANNELS.SELECT_VEHICLE, TABLES.Vehicles, id);
  },
  selectTask: (id) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, TABLES.Tasks, id);
  },
  selectEngineSizeMeasurementType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.EngineSizeMeasurementTypes);
  },
  selectFuelType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.FuelTypes);
  },
  selectVehicleType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.VehicleTypes);
  },
  selectPaginatedVehicles: (params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL_WITH_PARAMS, TABLES.Vehicles, params);
  },
  selectPaginatedTasks: (params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL_WITH_PARAMS, TABLES.Tasks, params);
  },
  selectAllVehicles: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.Vehicles);
  },
  selectAllTasks: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.Tasks);
  },
});
