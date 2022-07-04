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

  const handleOpenTabButton = async () => {
    await chrome.tabs.create({ url });
  };

  return (
    <li className="flex bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
      <button
        onClick={handleOpenTabButton}
        className="underline flex gap-2 items-center capitalize w-full py-4 px-3"
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

        <span className="text-left">{name}</span>
      </button>

      <div className="ml-auto flex items-center gap-4 px-4">
        <Link
          to={`/${id}/edit`}
          className="btn btn-outline btn-success btn-sm flex p-2 border-2 border-solid [&:hover>*]:text-white"
        >
          <button>
            <FaEdit />
          </button>
        </Link>
        <button
          className="btn btn-outline btn-error btn-sm flex items-center p-2 border-2 border-solid [&:hover>*]:text-white "
          onClick={handleDeleteBookmark}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};
export default SingleBookmark;
