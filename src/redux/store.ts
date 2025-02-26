import { configureStore } from "@reduxjs/toolkit";
import engineSizeMeasurementTypeSliceReducer from "./slices/engineSizeMeasurementTypeSlice";
import vehicleTypeSliceReducer from "./slices/vehicleTypeSlice";
import fuelTypeSliceReducer from "./slices/fuelTypeSlice";
import vehicleListRefetchSliceReducer from "./slices/vehicleListRefetchSlice";

const store = configureStore({
  reducer: {
    engineSizeMeasurementType: engineSizeMeasurementTypeSliceReducer,
    vehicleType: vehicleTypeSliceReducer,
    fuelType: fuelTypeSliceReducer,
    listRefetch: vehicleListRefetchSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
