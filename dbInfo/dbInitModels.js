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

const PhotoInit = (sequelize) =>
  sequelize.define("Photo", {
    photoBlob: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Vehicle",
        key: "id",
      },
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
      type: DataTypes.BLOB("long"),
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
      type: DataTypes.BLOB,
      allowNull: false,
    },
  });

const PartTaskPhotoInit = (sequelize) =>
  sequelize.define("PartTaskPhoto", {
    photoBlob: {
      type: DataTypes.BLOB,
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
  ]);
  return {
    VehicleType: models[0],
    FuelType: models[1],
    EngineSizeMeasurementType: models[2],
    Task: models[4],
    Vehicle: models[5],
    Part: models[6],
    PartTask: models[7],
    PartPhoto: models[8],
    PartTaskPhoto: models[9],
    TaskPhoto: models[10],
    Client: models[11],
    TaskNeededPart: models[12],
  };
};

module.exports = {
  defineAllModels,
};
