const { ipcMain } = require("electron");
const { CHANNELS } = require("../../channels");
const { sequelize } = require("../../dbInfo/dbInitFunctions");
const { Op } = require("sequelize");

ipcMain.handle(CHANNELS.SELECT, async (_, modelName, id, params = {}) => {
  const numberId = Number(id);
  if (!modelName || !numberId) return;
  const sequelizeModel = sequelize?.models?.[modelName];
  if (!sequelizeModel) return;
  const data = await sequelizeModel.findByPk(id, {
    include: params?.include?.map((modelName) => ({ model: sequelize.models[modelName] })) || null,
  });
  return data.toJSON();
});

ipcMain.handle(CHANNELS.SELECT_ALL, async (_, modelName, params) => {
  const sequelizeModel = sequelize?.models?.[modelName];
  if (!sequelizeModel) return;
  const data = await sequelizeModel.findAll({
    include: params?.include?.map((modelName) => ({ model: sequelize.models[modelName] })) || null,
  });
  return data?.map((row) => row.toJSON());
});

ipcMain.handle(CHANNELS.SELECT_ALL_WITH_PARAMS, async (_, modelName, params) => {
  if (!modelName || !params || typeof params !== "object") return;
  const sequelizeModel = sequelize?.models?.[modelName];

  if (!sequelizeModel) return;

  const { limit, page, include, filters } = params;

  const data = await sequelizeModel.findAndCountAll({
    limit: typeof limit === "number" ? limit : 15,
    offset: typeof page === "number" ? (page - 1) * limit : 0,
    include: include?.map((modelName) => ({ model: sequelize.models[modelName] })) || null,
    where:
      filters?.reduce((prev, curr) => {
        prev[curr.id] = {
          [Op.substring]: curr.value,
        };
        return prev;
      }, {}) || {},
  });

  return {
    data: data.rows.map((row) => row.toJSON()),
    total: data?.count,
  };
});
