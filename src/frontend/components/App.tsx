import LanguageServiceProvider from '@/context/LanguageServiceProvider';
import MainContextProvider from '../context/MainContextProvider';
import InputSection from './InputSection';
import ThemeButton from './ThemeButton';
import GameContextProvider from '@/context/GameContextProvider';
import GameSection from './GameSection';

function App() {
  return (
    <>
      <MainContextProvider>
        <div className="flex justify-center">
          <GameContextProvider>
            <GameSection />
          </GameContextProvider>
          <LanguageServiceProvider>
            <InputSection />
          </LanguageServiceProvider>
        </div>
        <ThemeButton />
      </MainContextProvider>
    </>
  );
}

export default App;
