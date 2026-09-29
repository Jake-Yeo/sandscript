import GameRenderer from './components/GameRenderer';
import Input from './components/Input';

function App() {
  return (
    <>
      <div className="flex">
        <GameRenderer />
        <Input />
      </div>
    </>
  );
}

export default App;
