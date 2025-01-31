const { contextBridge, ipcRenderer } = require('electron');
const { CHANNELS } = require('./channels');

contextBridge.exposeInMainWorld('delete', {
  deleteVehicle: (id) => {
    ipcRenderer.send(CHANNELS.DELETE, id);
  },
});

contextBridge.exposeInMainWorld('create', {
  createVehicle: (data) => {
    ipcRenderer.send(CHANNELS.CREATE, 'vehicle', data);
  },
});

contextBridge.exposeInMainWorld('select', {
  selectVehicle: (id, callback) => {
    ipcRenderer.send(CHANNELS.SELECT, 'vehicle', id, callback);
  },
  selectEngineSizeMeasurementType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, 'engine_size_measurement_type');
  },
  selectFuelType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, 'fuel_type');
  },
  selectVehicleType: () => {
    return ipcRenderer.invoke(CHANNELS.SELECT_ALL, 'vehicle_type');
  },
  // selectVehicles: (params) => {
  //   return ipcRenderer.invoke(CHANNELS.SELECT_ALL_WITH_PARAMS, 'vehicle', params);
  // },
});