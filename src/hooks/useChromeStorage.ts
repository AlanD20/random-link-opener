import { useAppDispatch } from '@/common/store';
import { clearAlert, setError, setSuccess } from '@/features/alertSlice';
import {
  getBookmarkStorageList,
  getSingleBookmarkStorage,
  setBookmarkStorageItem,
  updateBookmarkStorageItem,
  deleteBookmarkStorageItem,
  clearBookmarkStorage,
} from '@/common/storage';
import {
  BaseBookmark,
  Bookmark,
  setBookmarks,
  updateBookmarks,
} from '@/features/bookmarksSlice';

export const useChromeStorage = () => {
  const dispatch = useAppDispatch();

  const getAllBookmarks = async () => {
    const data = await getBookmarkStorageList();
    dispatch(setBookmarks(data));
  };

  const getSingleBookmark = async (id: string) => {
    return getSingleBookmarkStorage(id);
  };

  const addBookmark = async ({ name, url }: BaseBookmark) => {
    dispatch(clearAlert());
    try {
      await setBookmarkStorageItem({ name, url });
      dispatch(setSuccess({ success: 'Bookmark Added' }));
    } catch (err) {
      dispatch(setError({ error: 'Failed to Add Bookmark' }));
    }
  };

  const updateAllBookmarks = async (data: Bookmark | {}) => {
    dispatch(updateBookmarks(data));
  };

  const updateBookmark = async ({ id, name, url }: Bookmark) => {
    dispatch(clearAlert());
    try {
      await updateBookmarkStorageItem({ id, name, url });

      dispatch(setSuccess({ success: 'Bookmark Updated' }));
    } catch (err) {
      dispatch(setError({ error: 'Failed to Update Bookmark' }));
    }
  };

  const deleteBookmark = async (id: string) => {
    dispatch(clearAlert());
    try {
      const updated = await deleteBookmarkStorageItem(id);
      await updateAllBookmarks(updated);
      dispatch(setSuccess({ success: 'Bookmark Deleted' }));
    } catch (err) {
      dispatch(setError({ error: 'Failed to Delete Bookmark' }));
    }
  };

  const clearBookmark = async () => {
    dispatch(clearAlert());
    try {
      await clearBookmarkStorage();
      await updateAllBookmarks({});
      dispatch(setSuccess({ success: 'Bookmark Cleared' }));
    } catch (err) {
      dispatch(setError({ error: 'Failed to Clear Bookmark' }));
    }
  };

  return {
    getAllBookmarks,
    getSingleBookmark,
    addBookmark,
    updateAllBookmarks,
    updateBookmark,
    deleteBookmark,
    clearBookmark,
  };
};
