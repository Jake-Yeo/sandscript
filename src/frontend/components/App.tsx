import LanguageServiceProvider from '@/context/LanguageServiceProvider';
import MainContextProvider from '../context/MainContextProvider';
import GameRenderer from './GameRenderer';
import InputSection from './InputSection';
import ThemeButton from './ThemeButton';

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
        <ThemeButton />
      </MainContextProvider>
    </>
  );
}

export default App;
