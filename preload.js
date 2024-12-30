const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('delete', {
  deleteCar: (id) => {
    ipcRenderer.send('delete', id);
  },
});
