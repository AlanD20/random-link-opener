import { SYNCED_STORAGE_KEY } from '@/common/constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BaseBookmark {
  name: string;
  url: string;
  icon?: string;
}

export interface Bookmark extends BaseBookmark {
  id: string;
  created_at?: string;
}

export type BookmarkObject = {
  [key: string]: Bookmark;
};

export interface BookmarkState {
  [SYNCED_STORAGE_KEY]: BookmarkObject;
  filteredBookmarks: {
    isInputEmpty: boolean;
    bookmarks: BookmarkObject;
  };
}

export interface FilterState {
  bookmarks: BookmarkObject;
  text: string;
}

const initialState: BookmarkState = {
  [SYNCED_STORAGE_KEY]: {},
  filteredBookmarks: {
    isInputEmpty: true,
    bookmarks: {},
  },
};

export const bookmarksSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    setBookmarks(state: any, action: PayloadAction<BookmarkState>) {
      state[SYNCED_STORAGE_KEY] = {
        ...state[SYNCED_STORAGE_KEY],
        ...action.payload,
      };
    },
    updateBookmarks(state: any, action: PayloadAction<Bookmark | {}>) {
      state[SYNCED_STORAGE_KEY] = action.payload;
    },
    setFilterBy(state: BookmarkState, action: PayloadAction<FilterState>) {
      const text = action.payload.text.trim().toLowerCase();
      const bookmarks = action.payload.bookmarks;

      let fitleredBookmarks: BookmarkObject | {} = {};

      Object.keys(bookmarks).forEach((key: string) => {
        if (!bookmarks[key].name.toLowerCase().includes(text)) return;

        fitleredBookmarks = {
          ...fitleredBookmarks,
          [key]: bookmarks[key],
        };
      });

      state.filteredBookmarks.bookmarks = fitleredBookmarks;
      if (text) state.filteredBookmarks.isInputEmpty = false;
      else state.filteredBookmarks.isInputEmpty = true;
    },
  },
});

export const { setBookmarks, updateBookmarks, setFilterBy } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
