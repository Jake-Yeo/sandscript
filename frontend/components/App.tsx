import GameRenderer from './GameRenderer';
import Input from './Input';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <GameRenderer />
        <Input />
      </div>
    </>
  );
}

export default App;
