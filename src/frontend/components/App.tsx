import MainContextProvider from '../context/MainContextProvider';
import GameRenderer from './GameRenderer';
import Input from './Input';

function App() {
  return (
    <>
      <MainContextProvider>
        <div className="flex justify-center">
          <GameRenderer />
          <Input />
        </div>
      </MainContextProvider>
    </>
  );
}

export default App;
