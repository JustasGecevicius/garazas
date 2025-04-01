const { contextBridge, ipcRenderer } = require("electron");
const { CHANNELS } = require("./channels");
const { MODELS } = require("./tablesList");

contextBridge.exposeInMainWorld("delete", {
  deleteVehicle: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, MODELS.Vehicles, id);
  },
  deleteVehicleImage: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, MODELS.VehiclePhotos, id);
  },
  deleteTask: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, MODELS.Tasks, id);
  },
  deleteTaskPart: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, MODELS.Parts, id);
  },
});

contextBridge.exposeInMainWorld("create", {
  createVehicle: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, MODELS.Vehicles, data);
  },
  createTask: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, MODELS.Tasks, data);
  },
  createTaskPart: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, MODELS.Parts, data);
  },
  createTaskImage: (data) => {
    ipcRenderer.send(CHANNELS.CREATE_BLOB, MODELS.TaskPhotos, data);
  },
  createVehicleImage: (data) => {
    ipcRenderer.send(CHANNELS.CREATE_BLOB, MODELS.VehiclePhotos, data);
  },
});

contextBridge.exposeInMainWorld("update", {
  updateVehicle: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, MODELS.Vehicles, data);
  },
  updateTask: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, MODELS.Tasks, data);
  },
  updatePart: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, MODELS.Parts, data);
  },
});

contextBridge.exposeInMainWorld("select", {
  selectVehicle: (id, params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, MODELS.Vehicles, id, params);
  },
  selectTask: (id, params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, MODELS.Tasks, id, params);
  },
  selectPart: (id, params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, MODELS.Parts, id, params);
  },
  selectTaskParts: (id, params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, MODELS.PartTasks, id, params);
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
  selectPaginatedParts: (params) => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL_WITH_PARAMS, MODELS.Parts, params);
  },
  selectAllVehicles: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.Vehicles);
  },
  selectAllTasks: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, MODELS.Tasks);
  },
});
