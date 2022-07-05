import { useEffect } from 'react';
import SingleBookmark from './SingleBookmark';
import { ImFilesEmpty } from 'react-icons/im';
import { TbListSearch } from 'react-icons/tb';
import { useChromeStorage } from '@/hooks/useChromeStorage';
import { useFilterBookmark } from '@/hooks/useFilterBookmark';

const BookmarkLinks = () => {
  const { getAllBookmarks } = useChromeStorage();

  const { bookmarks, isInputEmpty, count } = useFilterBookmark();

  useEffect(() => void getAllBookmarks(), []);

  return (
    <ul className="flex flex-col w-full gap-2 pl-0">
      {count > 0 &&
        Object.keys(bookmarks).map((key: string) => (
          <SingleBookmark
            key={key}
            id={bookmarks[key]['id']}
            url={bookmarks[key]['url']}
            name={bookmarks[key]['name']}
            icon={bookmarks[key]['icon']}
          />
        ))}

      {isInputEmpty && count === 0 && (
        <h3 className="flex flex-col items-center justify-center gap-4 font-bold text-xl text-gray-400 my-8">
          <ImFilesEmpty />
          Bookmark is empty!
        </h3>
      )}

      {!isInputEmpty && count === 0 && (
        <h3 className="flex flex-col items-center justify-center gap-4 font-bold text-xl text-gray-400 my-8">
          <TbListSearch />
          Bookmark not found!
        </h3>
      )}
    </ul>
  );
};
export default BookmarkLinks;
