import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  mode: false, //false: light, true: dark
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    // Action to add comment
    updateMode: (state, action) => {
      state.mode = action.payload;
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.setting,
        };
      },
    },
  },
});

export const { updateMode } = settingSlice.actions;
export const selectMode = (state) => state.setting.mode;
export default settingSlice.reducer;