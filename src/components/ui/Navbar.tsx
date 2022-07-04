interface Props {
  children: React.ReactNode;
}

const Navbar = ({ children }: Props) => (
  <nav className="w-full">
    <div className="flex flex-col items-stretch gap-2">{children}</div>
  </nav>
);

export default Navbar;
