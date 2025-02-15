import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ComponentSort } from '../../components/ComponentSort';

export function Episodes({ episodes }) {
  const navigate = useNavigate();
  const [sortedFields, setSortField] = useState(episodes);

  return (
    <>
      <button onClick={() => navigate('/')}>На главную</button>
      <ComponentSort pages={episodes} onSort={setSortField} />
      <div>Страница Эпизодов</div>
      <br />
      <div className="episodes_pages_wr">
        {sortedFields.map((episode) => {
          return (
            <NavLink key={episode.id} to={`/episodes/${episode.id}`}>
              <div className="card_episode">
                <div>№ : {episode.id}</div>
                <div>Эпизод : {episode.episode}</div>
                <div> Наименование : {episode.name}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
