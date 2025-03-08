import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ComponentSort } from '../../components/ComponentSort';
import { AllTypeIntarface } from '../../type';

interface LocationsProps {
  locations: AllTypeIntarface[];
}

export const Locations: React.FC<LocationsProps> = ({ locations }) => {
  const [sortedFields, setSortField] = useState(locations);
  return (
    <>
      <ComponentSort pages={locations} onSort={setSortField} />
      <div>Страница Локаций</div>
      <br />
      <div className="locations_pages_wr">
        {sortedFields.map((location) => {
          return (
            <NavLink
              key={location.id}
              to={`/categories/locations/${location.id}`}
            >
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
};
