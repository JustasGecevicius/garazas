const { DataTypes } = require("sequelize");

const Client = (sequelize) =>
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

const Vehicle = (sequelize) =>
  sequelize.define("Vehicle", {
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    engineSize: DataTypes.FLOAT,
    engineSizeMeasurementTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "EngineSizeMeasurementType",
        key: "id",
      },
    },
    vinCode: DataTypes.STRING,
    make: DataTypes.STRING,
    fuelTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "FuelType",
        key: "id",
      },
    },
    odometer: DataTypes.INTEGER,
    fabricationYear: DataTypes.DATE,
    techInspectionDueDate: DataTypes.DATE,
    note: DataTypes.STRING,
    clientId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Client",
        key: "id",
      },
    },
    vehicleTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: "VehicleType",
        key: "id",
      },
    },
    plateNumber: DataTypes.STRING,
  });

const Photo = (sequelize) =>
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

const Task = (sequelize) =>
  sequelize.define("Task", {
    taskDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    note: DataTypes.STRING,
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Vehicle",
        key: "id",
      },
    },
  });

const PartTask = (sequelize) =>
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

const Part = (sequelize) =>
  sequelize.define("Part", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: DataTypes.INTEGER,
    installTime: DataTypes.DATE,
  });

const TaskNeededPart = (sequelize) =>
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

const TaskPhoto = (sequelize) =>
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

const PartPhoto = (sequelize) =>
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

const PartTaskPhoto = (sequelize) =>
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

const EngineSizeMeasurementType = (sequelize) =>
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

const FuelType = (sequelize) =>
  sequelize.define("FuelType", {
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const VehicleType = (sequelize) =>
  sequelize.define("VehicleType", {
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

const defineAllModels = async (sequelize) => {
  const models = await Promise.all([
    VehicleType(sequelize),
    FuelType(sequelize),
    EngineSizeMeasurementType(sequelize),
    PartTaskPhoto(sequelize),
    PartPhoto(sequelize),
    TaskPhoto(sequelize),
    TaskNeededPart(sequelize),
    Part(sequelize),
    PartTask(sequelize),
    Task(sequelize),
    Photo(sequelize),
    Vehicle(sequelize),
    Client(sequelize),
  ]);
  return {
    VehicleType: models[0],
    FuelType: models[1],
    EngineSizeMeasurementType: models[2],
    PartTaskPhoto: models[3],
    PartPhoto: models[4],
    TaskPhoto: models[5],
    TaskNeededPart: models[6],
    Part: models[7],
    PartTask: models[8],
    Task: models[9],
    Photo: models[10],
    Vehicle: models[11],
    Client: models[12],
  };
};

module.exports = {
  Client,
  Vehicle,
  Photo,
  Task,
  PartTask,
  Part,
  TaskNeededPart,
  TaskPhoto,
  PartPhoto,
  PartTaskPhoto,
  EngineSizeMeasurementType,
  FuelType,
  VehicleType,
  defineAllModels,
};
