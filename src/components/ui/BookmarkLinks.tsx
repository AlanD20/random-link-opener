import { useEffect } from 'react';
import { useAppSelector } from '@/common/store';
import { useChromeStorage } from '@/hooks/useChromeStorage';
import SingleBookmark from './SingleBookmark';
import { ImFilesEmpty } from 'react-icons/im';
import { SYNCED_STORAGE_KEY } from '@/common/constants';

const BookmarkLinks = () => {
  const { getAllBookmarks } = useChromeStorage();

  const bookmarks = useAppSelector(
    (state) => state.bookmarks[SYNCED_STORAGE_KEY]
  );

  const keys = Object.keys(bookmarks);

  useEffect(() => void getAllBookmarks(), []);

  return (
    <ul className="flex flex-col w-full gap-2 pl-0">
      {keys.length > 0 ? (
        keys.map((key: string) => (
          <SingleBookmark
            key={key}
            id={bookmarks[key]['id']}
            url={bookmarks[key]['url']}
            name={bookmarks[key]['name']}
            icon={bookmarks[key]['icon']}
          />
        ))
      ) : (
        <h3 className="flex flex-col items-center justify-center gap-4 font-bold text-xl text-gray-400">
          <ImFilesEmpty className="" />
          Bookmark is empty!
        </h3>
      )}
    </ul>
  );
};
export default BookmarkLinks;
