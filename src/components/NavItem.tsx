import { NavLink } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  to: string;
  name?: string;
  childClass?: string;
  parentClass?: string;
}

const NavItem = ({
  children,
  to,
  name,
  childClass = '',
  parentClass,
}: Props) => {
  const classes =
    'flex justify-center items-center gap-2 btn ' + childClass + ' ';

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    classes + (isActive ? 'text-red-400 ring-2 ring-red-400' : '');

  return (
    <li className={'flex items-stretch' + parentClass}>
      <NavLink to={to} className={(obj) => activeClass(obj)}>
        {children}
        {name}
      </NavLink>
    </li>
  );
};
export default NavItem;
