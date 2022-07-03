import NavItem from '../NavItem';
import Navbar from './Navbar';
import { FaHome } from 'react-icons/fa';
import { BiBookAdd } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { IoReload } from 'react-icons/io5';
import { useChromeStorage } from '@/hooks/useChromeStorage';
import { useAppDispatch } from '@/common/store';
import { clearAlert, setSuccess } from '@/features/alertSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const { getAllBookmarks } = useChromeStorage();

  const handleReloadBookmark = async () => {
    // dispatch(clearAlert());
    // await getAllBookmarks();
    // dispatch(setSuccess({ success: 'Refreshing...' }));
    window.location.reload();
  };

  return (
    <Navbar>
      <ul className="flex justify-between items-center">
        <NavItem to="/" name="Home">
          <FaHome />
        </NavItem>
        <div className="flex gap-2">
          <NavItem to="/add" name="Add Bookmark">
            <BiBookAdd />
          </NavItem>
          <NavItem to="/settings">
            <FiSettings />
          </NavItem>
          <button
            className="btn btn--hover min-w-fit"
            onClick={handleReloadBookmark}
          >
            <IoReload />
          </button>
        </div>
      </ul>
    </Navbar>
  );
};
export default Header;
