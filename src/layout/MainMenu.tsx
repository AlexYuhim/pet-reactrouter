import { Link } from 'react-router-dom';
export const MainMenu = () => {
  return (
    <div className="main-menu">
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/categories/">Категории</Link>
        </li>
        <li>
          <Link to="/contacts/">Контакты</Link>
        </li>
      </ul>
    </div>
  );
};
