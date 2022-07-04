import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from '../features/bookmarksSlice';
import settingsReducer from '../features/settingsSlice';
import alertReducer from '../features/alertSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    alert: alertReducer,
    bookmarks: bookmarksReducer,
    settings: settingsReducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          // 'alertStatus/setSuccess',
        ],
      },
    }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
