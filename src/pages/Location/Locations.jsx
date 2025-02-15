import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ComponentSort } from '../../components/ComponentSort';

export function Locations({ locations }) {
  const navigate = useNavigate();
  const [sortedFields, setSortField] = useState(locations);
  return (
    <>
      <button onClick={() => navigate('/')}>На главную</button>
      <ComponentSort pages={locations} onSort={setSortField} />
      <div>Страница Локаций</div>
      <br />
      <div className="locations_pages_wr">
        {sortedFields.map((location) => {
          return (
            <NavLink key={location.id} to={`/locations/${location.id}`}>
              <div className="card_location">
                <div> номер локации : {location.id}</div>
                <div> Наименование : {location.name}</div>
                <div> Дата созданиея : {location.created}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
