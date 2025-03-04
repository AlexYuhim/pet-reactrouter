import { Link } from 'react-router-dom';

export function NavMenu() {
  return (
    <div className="nav-menu">
      <ul>
        <li>
          <Link to="/characters/">Герои</Link>
        </li>
        <li>
          <Link to="/locations/">Локации</Link>
        </li>
        <li>
          <Link to="/episodes/">Эпизоды</Link>
        </li>
      </ul>
    </div>
  );
}
