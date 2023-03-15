import { createSlice } from '@reduxjs/toolkit';

export const AddTaskReducer = createSlice({
  name: 'addTask',
  initialState: [],
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
    },
    Remove: (state, action) => {
      return state.filter((addTask, id) => id !== action.payload);
    },
    Clear: () => {
      return [];
    },
  },
});

export const { Add, Remove, Clear } = AddTaskReducer.actions;

export default AddTaskReducer.reducer;
