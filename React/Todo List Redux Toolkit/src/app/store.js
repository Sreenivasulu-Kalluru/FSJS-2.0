import { configureStore } from '@reduxjs/toolkit';
import AddTaskReducer from '../features/addTaskSlice';

export const store = configureStore({
  reducer: {
    addTask: AddTaskReducer,
  },
});
