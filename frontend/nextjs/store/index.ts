import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import docsReducer from './slices/docsSlice';
import analyticsReducer from './slices/analyticsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    docs: docsReducer,
    analytics: analyticsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
