const { contextBridge, ipcRenderer } = require("electron");
const { CHANNELS } = require("./channels");
const { MODELS } = require("./tablesList");

contextBridge.exposeInMainWorld("delete", {
  deleteVehicle: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, MODELS.Vehicles, id);
  },
  deleteTask: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, MODELS.Tasks, id);
  },
});

contextBridge.exposeInMainWorld('create', {
  createVehicle: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, MODELS.Vehicles, data);
  },
  createTask: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, MODELS.Tasks, data);
  },
  createTaskImage: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, MODELS.TaskPhotos, data);
  },
});

contextBridge.exposeInMainWorld("update", {
  updateVehicle: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, MODELS.Vehicles, data);
  },
  updateTask: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, MODELS.Tasks, data);
  },
});

contextBridge.exposeInMainWorld("select", {
  selectVehicle: (id, params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, MODELS.Vehicles, id, params);
  },
  selectTask: (id, params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, MODELS.Tasks, id, params);
  },
  selectEngineSizeMeasurementType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.EngineSizeMeasurementTypes);
  },
  selectFuelType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.FuelTypes);
  },
  selectVehicleType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.VehicleTypes);
  },
  selectPaginatedVehicles: (params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL_WITH_PARAMS, MODELS.Vehicles, params);
  },
  selectPaginatedTasks: (params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL_WITH_PARAMS, MODELS.Tasks, params);
  },
  selectAllVehicles: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.Vehicles);
  },
  selectAllTasks: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.Tasks);
  },
});
