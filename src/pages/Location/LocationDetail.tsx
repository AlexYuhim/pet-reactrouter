import { useParams } from 'react-router-dom';
import { ILocation } from '../../type';

interface LocationDetailProps {
  locations: ILocation[];
}

export const LocationDetail: React.FC<LocationDetailProps> = ({
  locations,
}) => {
  const params = useParams();
  const { id } = params;
  const selectedLocation = locations.find(
    (location) => String(location.id) === id
  );

  return (
    <>
      <div className="location_card_detail_wr">
        Локация № {id}
        <div className="location_card_name">
          Наименоване: {selectedLocation?.name}
        </div>
        <div className="location_card_dimension">
          Измерение : {selectedLocation?.dimension}
        </div>
        <div className="location_card_type">
          Тип локации : {selectedLocation?.type}
        </div>
        <div className="location_card_created">
          Дата создания : {selectedLocation?.created}
        </div>
      </div>
    </>
  );
};
