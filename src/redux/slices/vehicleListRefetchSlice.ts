import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const vehicleListRefetchSlice = createSlice({
  name: "vehicleListRefetchSlice",
  initialState: { vehicleListToggle: false, taskListToggle: false, imageListToggle: false },
  reducers: {
    toggleVehicleListRefetchState: (state) => {
      state.vehicleListToggle = !state.vehicleListToggle;
    },
    toggleTaskListRefetchState: (state) => {
      state.taskListToggle = !state.taskListToggle;
    },
    toggleImageListRefetchState: (state) => {
      state.imageListToggle = !state.imageListToggle;
    },
  },
});

export const {
  toggleVehicleListRefetchState,
  toggleTaskListRefetchState,
  toggleImageListRefetchState,
} = vehicleListRefetchSlice.actions;
export default vehicleListRefetchSlice.reducer;

export const selectVehicleListRefetchToggle = (state: RootState) =>
  state.listRefetch.vehicleListToggle;
export const selectTaskListRefetchToggle = (state: RootState) => state.listRefetch.taskListToggle;
export const selectImageListRefetchToggle = (state: RootState) => state.listRefetch.imageListToggle;
