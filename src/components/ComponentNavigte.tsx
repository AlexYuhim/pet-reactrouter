import { useNavigate } from 'react-router-dom';

interface ComponentNavigateProps {
  namePath: string;
}

export const ComponentNavigate: React.FC<ComponentNavigateProps> = ({
  namePath,
}) => {
  const navigate = useNavigate();
  return (
    <div className="sortBlock">
      <button onClick={() => navigate('/')}>на главную</button>
      <button onClick={() => navigate(-1)}>{namePath}</button>
    </div>
  );
};
