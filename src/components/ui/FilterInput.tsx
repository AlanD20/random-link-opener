import { ChangeEvent } from 'react';
import { SYNCED_STORAGE_KEY } from '@/common/constants';
import { useAppDispatch, useAppSelector } from '@/common/store';
import { setFilterBy } from '@/features/bookmarksSlice';

const FilterInput = () => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(
    (state) => state.bookmarks[SYNCED_STORAGE_KEY]
  );
  const handleOnChangeFilterInput = (e: ChangeEvent<HTMLInputElement>) =>
    void dispatch(
      setFilterBy({
        bookmarks,
        text: e.target.value,
      })
    );

  return (
    <form className="mb-4 w-full flex justify-center items-center">
      <input
        type="text"
        className="input input-bordered border-2 border-solid input-sm w-4/5 text-base focus:outline-none focus:border-gray-500 py-4"
        autoComplete="off"
        placeholder="Search..."
        onChange={handleOnChangeFilterInput}
      />
    </form>
  );
};
export default FilterInput;
