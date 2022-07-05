import BookmarkLinks from '@comp/ui/BookmarkLinks';
import AlertStatus from '@/components/ui/AlertStatus';
import FilterInput from '@/components/ui/FilterInput';
import { useFilterBookmark } from '@/hooks/useFilterBookmark';

const Home = () => {
  const { count } = useFilterBookmark();

  return (
    <div className="page">
      <AlertStatus />
      <FilterInput />
      <h2 className="text-2xl mb-4 font-bold text-gray-700">
        All Bookmarks ( {count ?? 0} )
      </h2>
      <BookmarkLinks />
    </div>
  );
};

export default Home;
