export const SYNCED_STORAGE_KEY = 'random-link-opener';

export const USER_PREFERENCES = 'user-pref';
export const NOTIFICATION_STATUS = 'notification';
export const STORAGE_AREA_STATUS = 'storageArea';

export const USER_PREF_DEFAULT = {
  [NOTIFICATION_STATUS]: true,
  [STORAGE_AREA_STATUS]: true,
};

export const COMMANDS_LIST = {
  BOOKMARK_CURRENT_TAB: {
    id: 'bookmark-current-tab',
    name: 'BOOKMARK_CURRENT_TAB',
    title: 'Bookmark Current Tab',
    description: 'Current tab has been bookmarked',
  },
  BOOKMARK_ALL_TAB: {
    id: 'bookmark-all-tab',
    name: 'BOOKMARK_ALL_TAB',
    title: 'Bookmark All Tabs',
    description: 'All tabs has been bookmarked',
  },
  OPEN_RANDOM_BOOKMARK: {
    id: 'open-random-bookmark',
    name: 'OPEN_RANDOM_BOOKMARK',
    title: 'Open Random Bookmark',
    description: 'Random bookmark opened',
  },
  OPEN_LATEST_BOOKMARK: {
    id: 'open-latest-bookmark',
    name: 'OPEN_LATEST_BOOKMARK',
    title: 'Open Latest Bookmak',
    description: 'Latest bookmark opened',
  },
  CLEAR_BOOKMARK: {
    id: 'clear-bookmark',
    name: 'CLEAR_BOOKMARK',
    title: 'Clear Bookmark',
    description: 'Bookmark cleared',
  },
};

export const CURRENT_TAB = COMMANDS_LIST['BOOKMARK_CURRENT_TAB'];
export const ALL_TABS = COMMANDS_LIST['BOOKMARK_ALL_TAB'];
export const RANDOM_TAB = COMMANDS_LIST['OPEN_RANDOM_BOOKMARK'];
export const LATEST_TAB = COMMANDS_LIST['OPEN_LATEST_BOOKMARK'];
export const CLEAR_BOOKMARK = COMMANDS_LIST['CLEAR_BOOKMARK'];
