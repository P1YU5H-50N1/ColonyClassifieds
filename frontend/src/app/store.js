import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import classifiedReducer from '../features/classified/classifiedSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    classifieds: classifiedReducer
  },
});
