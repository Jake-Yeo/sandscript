import { useState, type ReactNode } from 'react';
import type { Theme } from '@/lib/types';
import { MainContext } from './MainContext';
import type { CompiledGame } from '../../game/contracts';

function setThemeHTML(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}
function setupTheme(): Theme {
  const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  setThemeHTML(theme);
  return theme;
}

// provider is in its own file to allow react fast refresh
export default function MainContextProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState(setupTheme());
  const [game, setGame] = useState<CompiledGame | null>(null);

  const setTheme = (value: Theme) => {
    setThemeHTML(value);
    setThemeState(value);
    localStorage.setItem('theme', value);
  };

  const value = {
    theme,
    setTheme,
    game,
    setGame,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
