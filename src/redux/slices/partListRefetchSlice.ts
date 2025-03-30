import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const partListRefetchSlice = createSlice({
  name: 'partListRefetchSlice',
  initialState: { partListToggle: false },
  reducers: {
    togglePartListRefetchState: (state) => {
      state.partListToggle = !state.partListToggle;
    },
  },
});

export const {
  togglePartListRefetchState,
} = partListRefetchSlice.actions;
export default partListRefetchSlice.reducer;

export const selectPartListRefetchToggle = (state: RootState) => state.partListRefetch;
