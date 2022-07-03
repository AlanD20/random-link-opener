import AlertStatus from '@/components/ui/AlertStatus';
import BookmarkLinks from '@comp/ui/BookmarkLinks';

const Home = () => {
  return (
    <div className="page">
      <h2 className="text-2xl mb-4 font-bold text-gray-700">Bookmarked Links:</h2>

      <AlertStatus />
      <BookmarkLinks />
    </div>
  );
};

export default Home;
