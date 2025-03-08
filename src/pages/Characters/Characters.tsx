import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ComponentSort } from '../../components/ComponentSort';
import { AllTypeIntarface } from '../../type';

interface CharactersProps {
  characters: AllTypeIntarface[];
  pages?: AllTypeIntarface[];
}

export const Characters: React.FC<CharactersProps> = ({ characters }) => {
  const [sortedFields, setSortField] = useState(characters);

  return (
    <>
      <ComponentSort pages={characters} onSort={setSortField} />

      <h2>Страница героев</h2>
      <br />
      <div className="characters_pages_wr">
        {sortedFields.map((hero) => {
          return (
            <NavLink key={hero.id} to={`/categories/characters/${hero.id}`}>
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
};
