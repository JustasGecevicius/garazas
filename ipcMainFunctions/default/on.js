const { ipcMain } = require("electron");
const { sequelize } = require("../../dbInfo/dbInitFunctions");
const { CHANNELS } = require("../../channels");

ipcMain.on(CHANNELS.DELETE, (_, modelName, id) => {
  const numberId = Number(id);
  if (!numberId || !modelName) return;

  try {
    const sequelizeModel = sequelize?.models?.[modelName];
    if (!sequelizeModel) return;
    sequelizeModel.destroy({ where: { id: numberId } });
  } catch (error) {
    console.log("ERROR", error);
  }
});

ipcMain.on(CHANNELS.CREATE, (_, modelName, data) => {
  if (typeof data !== "object" || !data) return;

  try {
    const sequelizeModel = sequelize?.models?.[modelName];
    if (!sequelizeModel) return;
    sequelizeModel.create(data);
  } catch (error) {
    console.log("ERROR", error);
  }
});

ipcMain.on(CHANNELS.CREATE_BLOB, (_, modelName, data) => {
  if (typeof data !== "object" || !data?.photoBlob?.type || !data?.photoBlob?.data) return;

  try {
    const sequelizeModel = sequelize?.models?.[modelName];
    if (!sequelizeModel) return;

    const { photoBlob } = data;
    const { type, data: blobArray } = photoBlob;
    data.photoBlobType = type;
    data.photoBlob = blobArray;

    sequelizeModel.create(data);
  } catch (error) {
    console.log("ERROR", error);
  }
});

ipcMain.on(CHANNELS.UPDATE, (_, modelName, data) => {
  if (typeof data !== 'object' || !data || !data?.id) return;

  try {
    const sequelizeModel = sequelize?.models?.[modelName];
    if (!sequelizeModel) return;
    sequelizeModel.update(data, { where: { id: data.id } });
  } catch (error) {
    console.log('ERROR', error);
  }
});
