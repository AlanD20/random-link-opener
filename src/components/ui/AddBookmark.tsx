import { useRef } from 'react';
import AlertStatus from './AlertStatus';
import { useChromeStorage } from '@/hooks/useChromeStorage';

const AddBookmark = () => {
  const { addBookmark } = useChromeStorage();
  const url = useRef<string>('');
  const name = useRef<string>('');

  const handleAddSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addBookmark({
      name: name.current,
      url: url.current,
    });
    e.target.reset();
  };

  return (
    <div className="page prose prose-sm">
      <h2 className="text-gray-700">Add New Bookmark</h2>

      <form className="form-control gap-4 w-full" onSubmit={handleAddSubmit}>
        <input
          type="text"
          className="input input-bordered border-2 border-solid input-md w-full text-base focus:outline-none focus:border-gray-500"
          placeholder="Enter Bookmark Name"
          onChange={(e) => (name.current = e.target.value)}
        />
        <input
          type="url"
          className="input input-bordered border-2 border-solid input-md w-full text-base focus:outline-none focus:border-gray-500"
          placeholder="Enter Bookmark URL"
          onChange={(e) => (url.current = e.target.value)}
          defaultValue="https://"
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>

      <AlertStatus />
    </div>
  );
};
export default AddBookmark;
