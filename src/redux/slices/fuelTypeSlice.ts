import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type FuelType = {
  id: number;
  fuelType: string;
};

const fuelTypeSlice = createSlice({
  name: "fuelTypeSlice",
  initialState: { options: [] as FuelType[] },
  reducers: {
    initialiseFuelType: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { initialiseFuelType } = fuelTypeSlice.actions;
export default fuelTypeSlice.reducer;

export const selectFuelType = (state: RootState) => state.fuelType;
