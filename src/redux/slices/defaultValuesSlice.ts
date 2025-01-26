import { createSlice } from '@reduxjs/toolkit';

const defaultValuesSlice = createSlice({
  name: 'defaultValues',
  initialState: {},
  reducers: {
    add: (state) => {
      // @ts-ignore
      state.value += 1;
    },
  },
});

export const { add } = defaultValuesSlice.actions;
export default defaultValuesSlice.reducer;
