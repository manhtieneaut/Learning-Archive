import { configureStore } from '@reduxjs/toolkit';
import userSlide from './userSlide';

export const store = configureStore({
  reducer: {
    userSlide: userSlide,
  },
});