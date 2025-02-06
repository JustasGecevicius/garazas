import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type VehicleType = {
  id: number,
  vehicle_type: string,
}

const vehicleTypeSlice = createSlice({
  name: 'vehicleTypeSlice',
  initialState: {options: [] as VehicleType[]},
  reducers: {
    initialiseVehicleType: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { initialiseVehicleType } = vehicleTypeSlice.actions;
export default vehicleTypeSlice.reducer;

export const selectVehicleType = (state: RootState) => state.vehicleType;
