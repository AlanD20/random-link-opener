import { useChromeStorage } from '@/hooks/useChromeStorage';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Props {
  id: string;
  url: string;
  name: string;
  icon?: string;
}

const SingleBookmark = ({ id, url, name, icon }: Props) => {
  const { deleteBookmark } = useChromeStorage();
  const [iconUrl, setIconUrl] = useState<string | undefined>(icon);

  const handleDeleteBookmark = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!id) return;
    await deleteBookmark(id);
  };

  return (
    <li className="flex bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex gap-2 items-center capitalize w-full py-4 px-3"
      >
        {iconUrl ? (
          <img
            src={iconUrl}
            className="m-w-full h-[25px] w-[25px]"
            onError={() => void setIconUrl(undefined)}
          />
        ) : (
          <BiLinkExternal className="text-2xl" />
        )}

        {name}
      </a>

      <div className="ml-auto flex items-center gap-4 px-4">
        <Link
          to={`/${id}/edit`}
          className="btn btn-success btn-sm flex text-white p-2"
        >
          <button>
            <FaEdit />
          </button>
        </Link>
        <button
          className="btn btn-error btn-sm flex items-center text-white p-2"
          onClick={handleDeleteBookmark}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
export default SingleBookmark;
