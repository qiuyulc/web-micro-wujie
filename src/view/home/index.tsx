import { useNavigate } from 'react-router';
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {' '}
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        加载login
      </button>
    </div>
  );
}
