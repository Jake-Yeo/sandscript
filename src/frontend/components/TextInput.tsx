import { cn } from 'cn';
import { useLanguageServiceContext } from '@/context/LanguageServiceContext';
import { Textarea } from './ui/textarea';

type ReactKBEvent = React.KeyboardEvent<HTMLTextAreaElement>;

function handleTab(e: ReactKBEvent) {
  e.preventDefault();

  const textarea = e.currentTarget;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const text = textarea.value;
  textarea.value = text.substring(0, start) + '\t' + text.substring(end);

  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

export default function TextInput() {
  const langService = useLanguageServiceContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Tab') return;
    handleTab(e);
  };

  return (
    <div className="w-[512px] h-[90vh] font-mono font-medium relative text-sm">
      <Highlight />
      <Textarea
        className={cn(
          'w-full h-full resize-none',
          'text-transparent caret-black', // make text invisible
        )}
        value={langService.text}
        onChange={(e) => langService.setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function Highlight() {
  const langService = useLanguageServiceContext();

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 whitespace-pre-wrap',
        'border border-transparent px-2.5 py-2', // match Textarea
      )}
    >
      <span>{langService.text}</span>
    </div>
  );
}
