import { useParams } from 'react-router-dom';
import { ComponentNavigate } from '../../components/ComponentNavigte';
export function EpisodeDetail({ episodes }) {
  const params = useParams();
  const { id } = params;
  const selectedEpisod = episodes.find((episode) => String(episode.id) === id);

  return (
    <>
      <ComponentNavigate namePath="ко всем эпизодам" />
      <div className="episode_card_detail_wr">
        Эпизод № {id}
        <div className="episode_card_species">
          Эпизод: {selectedEpisod.episode}
        </div>
        <div className="episode_card_gender">
          Наименование : {selectedEpisod.name}
        </div>
        <div className="episode_card_created">
          Дата создания : {selectedEpisod.created}
        </div>
        <div className="episode_card_air_date">
          дата выхода в эфир : {selectedEpisod.air_date}{' '}
        </div>
      </div>
    </>
  );
}
