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