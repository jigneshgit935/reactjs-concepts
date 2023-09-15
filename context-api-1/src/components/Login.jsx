import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="w-[400px] shadow-2xl mx-auto mt-10">
      <h2 className="text-4xl font-semibold py-4">Login</h2>
      <div className="flex flex-col  p-5   gap-10">
        <input
          type="text"
          className="outline-none bg-slate-700 text-white py-3 px-3 rounded-lg "
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="outline-none bg-slate-700 text-white py-3 px-3 rounded-lg "
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 rounded-full p-2 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
