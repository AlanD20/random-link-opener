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

export type BookmarkObjects = {
  [key: string]: Bookmark;
};

export interface BookmarkState {
  [SYNCED_STORAGE_KEY]: {
    [key: string]: Bookmark;
  };
}

const initialState: BookmarkState = {
  [SYNCED_STORAGE_KEY]: {},
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
  },
});

export const { setBookmarks, updateBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
