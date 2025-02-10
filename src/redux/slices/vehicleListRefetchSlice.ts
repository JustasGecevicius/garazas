import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const vehicleListRefetchSlice = createSlice({
  name: 'vehicleListRefetchSlice',
  initialState: { vehicleListToggle: false, taskListToggle: false },
  reducers: {
    toggleVehicleListRefetchState: (state) => {
      state.vehicleListToggle = !state.vehicleListToggle;
    },
    toggleTaskListRefetchState: (state) => {
      state.taskListToggle = !state.taskListToggle;
    },
  },
});

export const {
  toggleVehicleListRefetchState,
  toggleTaskListRefetchState,
} = vehicleListRefetchSlice.actions;
export default vehicleListRefetchSlice.reducer;

export const selectVehicleListRefetchToggle = (state: RootState) => state.listRefetch;
export const selectTaskListRefetchToggle = (state: RootState) => state.listRefetch;
