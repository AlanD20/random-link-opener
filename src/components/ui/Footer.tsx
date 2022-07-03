import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';
import EXTERNAL_LINKS from '@/common/EXTERNAL_LINKS.json';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2">
      <div className="flex justify-center items-stretch gap-4">
        <a
          className="btn btn-error btn-mid text-white text-xl"
          rel="noreferrer"
          target="_blank"
          href={EXTERNAL_LINKS.heart}
        >
          <FaHeart />
        </a>
        <a
          className="btn btn-md text-2xl"
          rel="noreferrer"
          target="_blank"
          href={EXTERNAL_LINKS.github}
        >
          <FaGithub />
        </a>
        <a
          className="btn btn-md btn-info text-white text-2xl"
          rel="noreferrer"
          target="_blank"
          href={EXTERNAL_LINKS.twitter}
        >
          <FaTwitter />
        </a>
      </div>
      <span className="self-center font-bold text-xl">@AlanD20</span>
    </footer>
  );
};
export default Footer;
