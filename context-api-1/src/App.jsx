import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h3 className="text-3xl">Context API</h3>

      <div>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
