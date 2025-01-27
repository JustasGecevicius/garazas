import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type EngineSizeMeasurementType = {
  id: number,
  measurement_unit: string,
  conversion_to_litre: number,
}

const engineSizeMeasurementTypeSlice = createSlice({
  name: 'engineSizeMeasurementTypeSlice',
  initialState: {options: [] as EngineSizeMeasurementType[]},
  reducers: {
    initialiseEngineTypes: (state, action) => {
      state.options = action.payload;
    },
  },
});

export const { initialiseEngineTypes } = engineSizeMeasurementTypeSlice.actions;
export default engineSizeMeasurementTypeSlice.reducer;

export const selectEngineSizeMeasurementType = (state: RootState) => state.engineSizeMeasurementType;
