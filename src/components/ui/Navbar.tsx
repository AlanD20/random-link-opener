import NavItem from '../NavItem';

interface Props {
  children: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  return (
    <nav className="w-full">
      <div className="flex flex-col items-stretch gap-2">{children}</div>
    </nav>
  );
};
export default Navbar;
