import AlertStatus from '@/components/ui/AlertStatus';
import BookmarkLinks from '@comp/ui/BookmarkLinks';

const Home = () => {
  return (
    <div className="page prose ">
      <h2 className="page__title">Bookmarked Links:</h2>

      <AlertStatus />
      <BookmarkLinks />
    </div>
  );
};

export default Home;
