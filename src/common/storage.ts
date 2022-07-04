import { BaseBookmark, Bookmark } from '@/features/bookmarksSlice';
import { nanoid } from 'nanoid';
import { SYNCED_STORAGE_KEY } from './constants';
import { setBadge } from './notifications';
import { getStorageAreaStatus } from './userPref';

export const chromeStorage = async () => {
  const syncStatus: boolean = await getStorageAreaStatus();

  if (syncStatus) {
    return chrome.storage.sync;
  } else {
    return chrome.storage.local;
  }
};

export const getBookmarkStorageList = async () => {
  const storageArea = await chromeStorage();
  const bookmarks = (await storageArea.get())[SYNCED_STORAGE_KEY];
  return bookmarks;
};

export const getSingleBookmarkStorage = async (id: string) => {
  const items = await getBookmarkStorageList();
  return items[id];
};

export const setBookmarkStorageItem = async ({
  name,
  url,
  icon,
}: BaseBookmark) => {
  const storageArea = await chromeStorage();
  const id = nanoid(25);
  const items = await getBookmarkStorageList();

  return storageArea.set({
    [SYNCED_STORAGE_KEY]: {
      ...items,
      [id]: {
        id,
        name,
        url,
        icon,
        created_at: new Date().toISOString(),
      },
    },
  });
};
export const setBookmarkStorageList = async (items: chrome.tabs.Tab[]) => {
  if (items.length <= 0) return;

  const storageArea = await chromeStorage();
  const prevItems = await getBookmarkStorageList();
  const filteredItems = items.length >= 10 ? items.splice(0, 10) : items;

  const data = filteredItems.reduce((acc, curr) => {
    const id = nanoid(25);

    return {
      ...acc,
      [id]: {
        id,
        name: curr.title,
        url: curr.url,
        icon: curr.favIconUrl,
        created_at: new Date().toISOString(),
      },
    };
  }, {});

  await storageArea.set({
    [SYNCED_STORAGE_KEY]: {
      ...prevItems,
      ...data,
    },
  });
  // Recursively save all opened tabs
  await setBookmarkStorageList(items);
};

export const updateBookmarkStorageItem = async ({
  id,
  name,
  url,
  icon,
}: Bookmark) => {
  const storageArea = await chromeStorage();

  return storageArea.set({
    [SYNCED_STORAGE_KEY]: {
      [id as string]: { id, name, url, icon },
    },
  });
};

export const deleteBookmarkStorageItem = async (id: string) => {
  const storageArea = await chromeStorage();

  const items = await getBookmarkStorageList();
  Object.keys(items).forEach((key: string) => {
    if (items[key].id === id) delete items[key];
  });

  await storageArea.set({
    [SYNCED_STORAGE_KEY]: items,
  });
  return items;
};

export const clearBookmarkStorage = async () => {
  const storageArea = await chromeStorage();
  await storageArea.set({
    [SYNCED_STORAGE_KEY]: {},
  });
};
