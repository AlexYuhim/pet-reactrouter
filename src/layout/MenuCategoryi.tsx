import { Link, Outlet } from 'react-router-dom';

export function MenuCategoryi() {
  return (
    <div className="nav-menu">
      <ul>
        <li>
          <Link to="/categories/characters/">Герои</Link>
        </li>
        <li>
          <Link to="/categories/locations/">Локации</Link>
        </li>
        <li>
          <Link to="/categories/episodes/">Эпизоды</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
