const { ipcMain } = require("electron");
const { CHANNELS } = require("../../channels");
const { sequelize } = require("../../dbInfo/dbInitFunctions");

ipcMain.handle(CHANNELS.SELECT, async (_, modelName, id, params = {}) => {
  const numberId = Number(id);
  if (!modelName || !numberId) return;
  const sequelizeModel = sequelize?.models?.[modelName];
  if (!sequelizeModel) return;
  const data = await sequelizeModel.findByPk(id, {
    include: params?.include?.map((modelName) => ({ model: sequelize.models[modelName] })) || null,
  });
  return data.dataValues;
});

ipcMain.handle(CHANNELS.SELECT_ALL, async (_, modelName) => {
  const sequelizeModel = sequelize?.models?.[modelName];
  if (!sequelizeModel) return;
  const data = await sequelizeModel.findAll();
  return data.map((entry) => entry.dataValues);
});

ipcMain.handle(CHANNELS.SELECT_ALL_WITH_PARAMS, async (_, modelName, params) => {
  if (!modelName || !params) return;
  const sequelizeModel = sequelize?.models?.[modelName];

  if (!sequelizeModel) return;

  const { limit, page } = params;

  const data = await sequelizeModel.findAndCountAll({
    limit: typeof limit === "number" ? limit : 15,
    offset: typeof page === "number" ? (page - 1) * limit : 0,
  });

  return {
    data: data.rows.map((entry) => entry.dataValues),
    total: data?.count,
  };
});
