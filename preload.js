const { contextBridge, ipcRenderer } = require('electron');
const { CHANNELS } = require('./channels');
const { TABLES } = require('./tablesList');

contextBridge.exposeInMainWorld('delete', {
  deleteVehicle: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, TABLES.vehicle, id);
  },
  deleteTask: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, TABLES.task, id);
  },
});

contextBridge.exposeInMainWorld('create', {
  createVehicle: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, TABLES.vehicle, data);
  },
  createTask: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, TABLES.task, data);
  },
});

contextBridge.exposeInMainWorld('update', {
  updateVehicle: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, TABLES.vehicle, data);
  },
  updateTask: (data) => {
    ipcRenderer.send(CHANNELS.UPDATE, TABLES.task, data);
  },
});

contextBridge.exposeInMainWorld('select', {
  selectVehicle: (id) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, TABLES.vehicle, id);
  },
  selectTask: (id) => {
    return ipcRenderer.invoke(CHANNELS.SELECT, TABLES.task, id);
  },
  selectEngineSizeMeasurementType: () => {
    return ipcRenderer.invoke(
      CHANNELS.SELECT_ALL,
      TABLES.engine_size_measurement_type
    );
  },
  selectFuelType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.fuel_type);
  },
  selectVehicleType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.vehicle_type);
  },
  selectPaginatedVehicles: (params) => {
    return ipcRenderer.invoke(
      CHANNELS.SELECT_ALL_WITH_PARAMS,
      TABLES.vehicle,
      params
    );
  },
  selectPaginatedTasks: (params) => {
    return ipcRenderer.invoke(
      CHANNELS.SELECT_ALL_WITH_PARAMS,
      TABLES.task,
      params
    );
  },
  selectAllVehicles: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.vehicle);
  },
  selectAllTasks: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, TABLES.task);
  },
});