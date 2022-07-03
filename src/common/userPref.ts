import {
  NOTIFICATION_STATUS,
  USER_PREFERENCES,
  STORAGE_AREA_STATUS,
  USER_PREF_DEFAULT,
} from './constants';

const storage = chrome.storage.sync;

export const getUserPref = async () => {
  const data = await storage.get();
  if (
    data[USER_PREFERENCES] === undefined ||
    Object.keys(data[USER_PREFERENCES]).length === 0
  ) {
    await storage.set({
      [USER_PREFERENCES]: USER_PREF_DEFAULT,
    });
    return USER_PREF_DEFAULT;
  }

  return data[USER_PREFERENCES];
};

export const clearUserPref = async () =>
  storage.set({
    [USER_PREFERENCES]: USER_PREF_DEFAULT,
  });

export const setNotificationStatus = async (value: boolean) => {
  const pref = await getUserPref();
  return storage.set({
    [USER_PREFERENCES]: {
      ...pref,
      [NOTIFICATION_STATUS]: value,
    },
  });
};

export const setStorageAreaStatus = async (value: boolean) => {
  const pref = await getUserPref();
  return storage.set({
    [USER_PREFERENCES]: {
      ...pref,
      [STORAGE_AREA_STATUS]: value,
    },
  });
};

export const getNotificationStatus = async () => {
  const status = (await storage.get())[USER_PREFERENCES];
  return status[NOTIFICATION_STATUS];
};

export const getStorageAreaStatus = async () => {
  const status = (await storage.get())[USER_PREFERENCES];
  return status[STORAGE_AREA_STATUS];
};
