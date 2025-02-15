import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ComponentSort } from '../../components/ComponentSort';

export function Characters({ characters }) {
  const navigate = useNavigate();
  const [sortedFields, setSortField] = useState(characters);

  return (
    <>
      <div>
        <button onClick={() => navigate('/')}>На главную</button>
      </div>
      <ComponentSort pages={characters} onSort={setSortField} />

      <h2>Страница героев</h2>
      <br />
      <div className="characters_pages_wr">
        {sortedFields.map((hero) => {
          return (
            <NavLink key={hero.id} to={`/characters/${hero.id}`}>
              <div className="card_hero">
                персонаж № {hero.id}
                <div>
                  <img src={hero.image} alt="картинка персонажа" />
                </div>
                <div>{hero.name}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
