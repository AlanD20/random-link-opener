import { useChromeStorage } from '@/hooks/useChromeStorage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AlertStatus from './AlertStatus';

const EditBookmark = () => {
  const { getSingleBookmark, updateBookmark } = useChromeStorage();
  const { id } = useParams();
  const [url, setUrl] = useState<string>('');
  const [name, setName] = useState<string>('');

  useEffect(() => {
    if (!id) return;
    getSingleBookmark(id).then((bookmark) => {
      setName(bookmark.name);
      setUrl(bookmark.url);
    });
  }, [id]);

  const handleEditSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) return;
    await updateBookmark({
      id,
      name,
      url,
    });
  };
  return (
    <div className="page prose prose-sm">
      <h2 className="page__title">Edit Bookmark</h2>

      <AlertStatus />

      <form className="form-control gap-4 w-full" onSubmit={handleEditSubmit}>
        <input
          type="text"
          className="input input-bordered input-md w-full text-base"
          placeholder="Enter Bookmark Name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="url"
          className="input input-bordered input-md w-full text-base"
          placeholder="Enter Bookmark URL"
          defaultValue={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="btn btn--success">
          Update
        </button>
      </form>
    </div>
  );
};
export default EditBookmark;