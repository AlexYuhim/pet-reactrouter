import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h1>NotFound</h1>
      <button onClick={() => navigate('/')}>На главную</button>
    </>
  );
}
