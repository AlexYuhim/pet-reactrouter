import { useNavigate } from 'react-router-dom';

export function ComponentNavigate({ namePath }) {
  const navigate = useNavigate();
  return (
    <div className="sortBlock">
      <button onClick={() => navigate('/')}>на главную</button>
      <button onClick={() => navigate(-1)}>{namePath}</button>
    </div>
  );
}
