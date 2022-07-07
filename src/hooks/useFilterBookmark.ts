import { useAppSelector } from '@/common/store';
import { SYNCED_STORAGE_KEY } from '@/common/constants';

export const useFilterBookmark = () => {
  const { bookmarks, isInputEmpty } = useAppSelector((state) => {
    const filtered = state.bookmarks.filteredBookmarks;

    if (filtered.isInputEmpty && Object.keys(filtered.bookmarks).length === 0) {
      return {
        isInputEmpty: filtered.isInputEmpty,
        bookmarks: state.bookmarks[SYNCED_STORAGE_KEY],
      };
    }

    return {
      isInputEmpty: filtered.isInputEmpty,
      bookmarks: filtered.bookmarks,
    };
  });

  const count = Object.keys(bookmarks).length;

  return { bookmarks, isInputEmpty, count };
};
