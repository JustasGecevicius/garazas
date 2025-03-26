const { DataTypes } = require("sequelize");

const ClientInit = (sequelize) =>
  sequelize.define("Client", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const VehicleInit = (sequelize) =>
  sequelize.define("Vehicle", {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    engineSize: DataTypes.FLOAT,
    vinCode: DataTypes.STRING,
    make: DataTypes.STRING,
    odometer: DataTypes.INTEGER,
    fabricationYear: DataTypes.DATE,
    techInspectionDueDate: DataTypes.DATE,
    note: DataTypes.STRING,
    plateNumber: DataTypes.STRING,
  });

const VehiclePhotoInit = (sequelize) =>
  sequelize.define("VehiclePhoto", {
    photoBlob: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    photoBlobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const TaskInit = (sequelize) =>
  sequelize.define("Task", {
    taskDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    note: DataTypes.STRING,
  });

const PartTaskInit = (sequelize) =>
  sequelize.define("PartTask", {
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    discount: DataTypes.FLOAT,
  });

const PartInit = (sequelize) =>
  sequelize.define("Part", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.INTEGER,
    installTime: DataTypes.INTEGER,
  });

const TaskNeededPartInit = (sequelize) =>
  sequelize.define("TaskNeededPart", {
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

const TaskPhotoInit = (sequelize) =>
  sequelize.define("TaskPhoto", {
    photoBlob: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    photoBlobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const PartPhotoInit = (sequelize) =>
  sequelize.define("PartPhoto", {
    photoBlob: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    photoBlobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const PartTaskPhotoInit = (sequelize) =>
  sequelize.define("PartTaskPhoto", {
    photoBlob: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    photoBlobType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const EngineSizeMeasurementTypeInit = (sequelize) =>
  sequelize.define("EngineSizeMeasurementType", {
    engineSizeMeasurementType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conversionToLitre: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

const FuelTypeInit = (sequelize) =>
  sequelize.define("FuelType", {
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const VehicleTypeInit = (sequelize) =>
  sequelize.define("VehicleType", {
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const defineAllModels = async (sequelize) => {
  const VehicleType = VehicleTypeInit(sequelize);
  const FuelType = FuelTypeInit(sequelize);
  const EngineSizeMeasurementType = EngineSizeMeasurementTypeInit(sequelize);
  const Task = TaskInit(sequelize);
  const Vehicle = VehicleInit(sequelize);
  const Part = PartInit(sequelize);
  const PartTask = PartTaskInit(sequelize);
  const PartPhoto = PartPhotoInit(sequelize);
  const PartTaskPhoto = PartTaskPhotoInit(sequelize);
  const TaskPhoto = TaskPhotoInit(sequelize);
  const VehiclePhoto = VehiclePhotoInit(sequelize);
  const Client = ClientInit(sequelize);
  const TaskNeededPart = TaskNeededPartInit(sequelize);

  VehicleType.hasMany(Vehicle);
  Vehicle.belongsTo(VehicleType);
  FuelType.hasMany(Vehicle);
  Vehicle.belongsTo(FuelType);
  EngineSizeMeasurementType.hasMany(Vehicle);
  Vehicle.belongsTo(EngineSizeMeasurementType);
  Vehicle.hasMany(Task);
  Task.belongsTo(Vehicle);

  Part.belongsToMany(Task, { through: PartTask });
  Task.belongsToMany(Part, { through: PartTask });
  Task.hasMany(TaskPhoto);
  TaskPhoto.belongsTo(Task);
  Vehicle.hasMany(VehiclePhoto);
  VehiclePhoto.belongsTo(Vehicle);
  PartPhoto.belongsTo(Part);
  Part.hasMany(PartPhoto);
  PartTaskPhoto.belongsTo(PartTask);
  PartTask.hasMany(PartTaskPhoto);
  Client.hasMany(Vehicle);
  Vehicle.belongsTo(Client);
  Part.belongsToMany(Task, { through: TaskNeededPart });
  Task.belongsToMany(Part, { through: TaskNeededPart });

  const models = await Promise.all([
    VehicleType,
    FuelType,
    EngineSizeMeasurementType,
    Task,
    Vehicle,
    Part,
    PartTask,
    PartPhoto,
    PartTaskPhoto,
    TaskPhoto,
    Client,
    TaskNeededPart,
    VehiclePhoto,
  ]);

  return models.reduce((prev, curr) => {
    prev[curr?.getTableName()] = curr;
    return prev;
  }, {});
};

module.exports = {
  defineAllModels,
};
