import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 text-black">Tailwind Props</h1>

      <br />
      <Card name="Jignesh" btnText="Click me" />
    </>
  );
}

export default App;
