import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const vehicleListRefetchSlice = createSlice({
  name: "vehicleListRefetchSlice",
  initialState: {
    vehicleListToggle: false,
    taskListToggle: false,
    imageListToggle: false,
    taskToggle: false,
  },
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
    toggleTaskRefetchState: (state) => {
      state.taskToggle = !state.taskToggle;
    },
  },
});

export const {
  toggleVehicleListRefetchState,
  toggleTaskListRefetchState,
  toggleImageListRefetchState,
  toggleTaskRefetchState,
} = vehicleListRefetchSlice.actions;
export default vehicleListRefetchSlice.reducer;

export const selectVehicleListRefetchToggle = (state: RootState) =>
  state.listRefetch.vehicleListToggle;
export const selectTaskListRefetchToggle = (state: RootState) => state.listRefetch.taskListToggle;
export const selectImageListRefetchToggle = (state: RootState) => state.listRefetch.imageListToggle;
export const selectTaskRefetchToggle = (state: RootState) => state.listRefetch.taskToggle;
