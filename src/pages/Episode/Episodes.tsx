import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ComponentSort } from '../../components/ComponentSort';
import { AllTypeIntarface } from '../../type';

interface EpisodeProps {
  episodes: AllTypeIntarface[];
}

export const Episodes: React.FC<EpisodeProps> = ({ episodes }) => {
  const [sortedFields, setSortField] = useState(episodes);

  return (
    <>
      <ComponentSort pages={episodes} onSort={setSortField} />
      <div>Страница Эпизодов</div>
      <br />
      <div className="episodes_pages_wr">
        {sortedFields.map((episode) => {
          return (
            <NavLink key={episode.id} to={`/categories/episodes/${episode.id}`}>
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
};
