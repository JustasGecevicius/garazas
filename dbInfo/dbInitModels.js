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
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Task",
        key: "id",
      },
    },
    usedPartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Part",
        key: "id",
      },
    },
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
    installTime: DataTypes.DATE,
  });

const TaskNeededPartInit = (sequelize) =>
  sequelize.define("TaskNeededPart", {
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Task",
        key: "id",
      },
    },
    neededPartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Part",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

const TaskPhotoInit = (sequelize) =>
  sequelize.define("TaskPhoto", {
    photoBlob: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Task",
        key: "id",
      },
    },
  });

const PartPhotoInit = (sequelize) =>
  sequelize.define("PartPhoto", {
    photoBlob: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    partId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Part",
        key: "id",
      },
    },
  });

const PartTaskPhotoInit = (sequelize) =>
  sequelize.define("PartTaskPhoto", {
    photoBlob: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    partTaskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "PartTask",
        key: "id",
      },
    },
  });

const EngineSizeMeasurementTypeInit = (sequelize) =>
  sequelize.define("EngineSizeMeasurementType", {
    measurementUnit: {
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
  //  const PartTaskPhoto = PartTaskPhoto(sequelize),
  //  const PartPhoto = PartPhoto(sequelize),
  //  const TaskPhoto = TaskPhoto(sequelize),
  //  const TaskNeededPart = TaskNeededPart(sequelize),
  //  const Part = Part(sequelize),
  //  const PartTask = PartTask(sequelize),
  //  const Photo = Photo(sequelize),
  //  const Client = Client(sequelize),
  VehicleType.hasMany(Vehicle);
  FuelType.hasMany(Vehicle);
  EngineSizeMeasurementType.hasMany(Vehicle);
  Vehicle.hasMany(Task);

  const models = await Promise.all([
    VehicleType,
    FuelType,
    EngineSizeMeasurementType,
    Task,
    Vehicle,
    // PartTaskPhoto(sequelize),
    // PartPhoto(sequelize),
    // TaskPhoto(sequelize),
    // TaskNeededPart(sequelize),
    // Part(sequelize),
    // PartTask(sequelize),
    // Photo(sequelize),
    // Client(sequelize),
  ]);
  return {
    VehicleType: models[0],
    FuelType: models[1],
    EngineSizeMeasurementType: models[2],
    Task: models[9],
    Vehicle: models[11],
    // PartTaskPhoto: models[3],
    // PartPhoto: models[4],
    // TaskPhoto: models[5],
    // TaskNeededPart: models[6],
    // Part: models[7],
    // PartTask: models[8],
    //   Photo: models[10],
    //   Client: models[12],
  };
};

module.exports = {
  defineAllModels,
};
