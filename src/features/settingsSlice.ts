import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STORAGE_AREA_STATUS, USER_PREF_DEFAULT } from '@/common/constants';

type SettingsState = {
  notifications?: boolean | undefined;
  storageArea?: boolean | undefined;
};

const initialState: SettingsState = {
  notifications: undefined,
  storageArea: undefined,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNotification(
      state: SettingsState,
      action: PayloadAction<SettingsState>
    ) {
      state.notifications = action.payload.notifications;
    },
    setStorageArea(state: SettingsState, action: PayloadAction<SettingsState>) {
      state.storageArea = action.payload.storageArea;
    },
    resetDefault(state: SettingsState) {
      state.notifications = USER_PREF_DEFAULT[STORAGE_AREA_STATUS];
      state.storageArea = USER_PREF_DEFAULT[STORAGE_AREA_STATUS];
    },
  },
});

export const { setNotification, setStorageArea, resetDefault } =
  settingsSlice.actions;

export default settingsSlice.reducer;
