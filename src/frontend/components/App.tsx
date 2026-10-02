import LanguageServiceProvider from '@/context/LanguageServiceProvider';
import MainContextProvider from '../context/MainContextProvider';
import GameRenderer from './GameRenderer';
import InputSection from './InputSection';

function App() {
  return (
    <>
      <MainContextProvider>
        <div className="flex justify-center">
          <GameRenderer />
          <LanguageServiceProvider>
            <InputSection />
          </LanguageServiceProvider>
        </div>
      </MainContextProvider>
    </>
  );
}

export default App;
