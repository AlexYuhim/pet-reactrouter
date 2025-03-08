import { useParams } from 'react-router-dom';
import { ICharacter } from '../../type';

interface HeroDetailProps {
  characters: ICharacter[];
}

export const HeroDetail: React.FC<HeroDetailProps> = ({ characters = [] }) => {
  const params = useParams();
  const { id } = params;
  const selectedPerson = characters.find((hero) => String(hero.id) === id);

  return (
    <>
      <div className="hero_card_detail_wr">
        Персонаж № {id}
        <div className="hero_card_img">
          <img
            src={selectedPerson?.image}
            alt="картинка персонажа"
            title={selectedPerson?.name}
          />
        </div>
        <div className="hero_card_name">Имя : {selectedPerson?.name} </div>
        <div className="hero_card_species">
          Биологический вид : {selectedPerson?.species}
        </div>
        {selectedPerson?.type && (
          <div className="hero_card_type">
            Описание : {selectedPerson?.type}
          </div>
        )}
        <div className="hero_card_gender"> Пол : {selectedPerson?.gender} </div>
        <div className="hero_card_status">
          Статус : {selectedPerson?.status}
        </div>
        <div className="hero_card_created">
          Дата создания : {selectedPerson?.created}
        </div>
      </div>
    </>
  );
};
