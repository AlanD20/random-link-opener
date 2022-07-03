import {
  clearBookmarkStorage,
  getBookmarkStorageList,
  setBookmarkStorageItem,
  setBookmarkStorageList,
} from '@/common/storage';
import {
  CURRENT_TAB,
  ALL_TABS,
  RANDOM_TAB,
  LATEST_TAB,
  CLEAR_BOOKMARK,
} from '@/common/constants';
import { createNotify } from '@/common/notifications';
import { Bookmark, BookmarkObjects } from '@/features/bookmarksSlice';

interface Actions {
  [key: string]: (tab?: chrome.tabs.Tab) => void;
}

export const ACTIONS: Actions = {
  [CURRENT_TAB.name]: async (tab) => {
    const currentTab = tab ?? (await chrome.tabs.query({ active: true }))[0];

    await setBookmarkStorageItem({
      name: currentTab.title as string,
      url: currentTab.url as string,
      icon: currentTab.favIconUrl,
    });

    await createNotify(
      CURRENT_TAB.id,
      CURRENT_TAB.title,
      CURRENT_TAB.description
    );
  },
  [ALL_TABS.name]: async () => {
    const tabs = await chrome.tabs.query({});

    await setBookmarkStorageList(tabs);

    await createNotify(ALL_TABS.id, ALL_TABS.title, ALL_TABS.description);
  },
  [RANDOM_TAB.name]: async () => {
    const items: BookmarkObjects = await getBookmarkStorageList();

    const length = Object.keys(items).length;
    const randomIndex = Math.ceil(Math.random() * 1000) % length;
    const chosenBookmarkId = Object.keys(items)[randomIndex];
    const bookmark: Bookmark = items[chosenBookmarkId];

    chrome.tabs.create({
      url: bookmark.url,
    });

    await createNotify(RANDOM_TAB.id, RANDOM_TAB.title, RANDOM_TAB.description);
  },
  [LATEST_TAB.name]: async () => {
    const items: BookmarkObjects = await getBookmarkStorageList();

    // * Sort by descending order for created_at property
    const sorted = Object.keys(items).sort(
      (a, b) =>
        new Date(items[b].created_at as string).getTime() -
        new Date(items[a].created_at as string).getTime()
    );

    const bookmark = items[sorted[0]];

    chrome.tabs.create({
      url: bookmark.url,
    });

    await createNotify(LATEST_TAB.id, LATEST_TAB.title, LATEST_TAB.description);
  },
  [CLEAR_BOOKMARK.name]: async () => {
    await clearBookmarkStorage();

    await createNotify(
      CLEAR_BOOKMARK.id,
      CLEAR_BOOKMARK.title,
      CLEAR_BOOKMARK.description
    );
  },
};
