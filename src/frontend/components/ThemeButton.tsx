import { SunMoon } from 'lucide-react';
import { useMainContext } from '@/context/MainContext';
import { Button } from './ui/button';

export default function ThemeButton() {
  const context = useMainContext();
  return (
    <Button
      className="fixed bottom-4 left-4"
      onClick={() => context.setTheme(context.theme === 'dark' ? 'light' : 'dark')}
      variant="outline"
    >
      <SunMoon />
    </Button>
  );
}
