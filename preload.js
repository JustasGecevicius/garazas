const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('delete', {
  deleteVehicle: (id) => {
    ipcRenderer.send('delete', id);
  },
});

contextBridge.exposeInMainWorld('create', {
  createVehicle: (data) => {
    ipcRenderer.send('create', 'vehicle', data);
  },
});

contextBridge.exposeInMainWorld('select', {
  selectVehicle: (id, callback) => {
    ipcRenderer.send('select_full', 'vehicle', id, callback);
  },
  selectEngineSizeMeasurementType: (callback) => {
    console.log('SENDINGINPRELOAD');
    ipcRenderer.send('select_all', 'engine_size_measurement_type', callback);
  },
});