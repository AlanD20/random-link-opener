import { SYNCED_STORAGE_KEY } from '@/common/constants';
import { getBookmarkStorageList } from '@/common/storage';
import { useAppSelector } from '@/common/store';
import AlertStatus from '@/components/ui/AlertStatus';
import BookmarkLinks from '@comp/ui/BookmarkLinks';
import { useEffect, useState } from 'react';

const Home = () => {
  const bookmarks = useAppSelector(
    (state) => state.bookmarks[SYNCED_STORAGE_KEY]
  );

  console.log(bookmarks);

  return (
    <div className="page">
      <h2 className="text-2xl mb-4 font-bold text-gray-700">
        All Bookmarks ( {bookmarks ? Object.keys(bookmarks).length : 0} )
      </h2>
      <AlertStatus />
      <BookmarkLinks />
    </div>
  );
};

export default Home;
