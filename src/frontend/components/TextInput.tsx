import type { Token } from 'antlr4ng';
import { cn } from 'cn';
import { useRef } from 'react';
import { flushSync } from 'react-dom';
import { useLanguageServiceContext } from '@/context/LanguageServiceContext';
import { Textarea } from './ui/textarea';
import { getTokenColor } from '@/lib/token-utils';
import { useMainContext } from '@/context/MainContext';
import { ArrowRightToLine } from 'lucide-react';
import { DSLLexer } from '../../generated/DSLLexer';

type ReactKBEvent = React.KeyboardEvent<HTMLTextAreaElement>;

function handleTab(e: ReactKBEvent, setText: (value: string) => void) {
  e.preventDefault();

  const textarea = e.currentTarget;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const text = textarea.value;
  flushSync(() => setText(text.substring(0, start) + '\t' + text.substring(end)));

  textarea.selectionStart = textarea.selectionEnd = start + 1;
}

export default function TextInput() {
  const langService = useLanguageServiceContext();
  const highlightRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: ReactKBEvent) => {
    if (e.key !== 'Tab') return;
    handleTab(e, langService.setText);
  };

  const handleTextareaScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (!highlightRef.current) return;
    highlightRef.current.scrollTop = e.currentTarget.scrollTop;
    highlightRef.current.scrollLeft = e.currentTarget.scrollLeft;
  };

  return (
    <div className="w-[512px] h-[90vh] font-mono font-medium relative text-sm">
      <div
        ref={highlightRef}
        className={cn(
          'pointer-events-none absolute inset-0 overflow-hidden whitespace-pre',
          'border border-transparent px-2.5 py-2', // match Textarea
        )}
      >
        {langService.tokens.map((t, i) => <TokenDisplay key={i} token={t} />)}
      </div>
      <Textarea
        className={cn(
          'w-full h-full resize-none whitespace-pre',
          'text-transparent caret-foreground', // make text invisible
          // 'text-red-500' // debugging
        )}
        value={langService.text}
        onChange={(e) => langService.setText(e.target.value)}
        onKeyDown={handleKeyDown}
        onScroll={handleTextareaScroll}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
}

function TokenDisplay({ token }: { token: Token }) {
  const mainContext = useMainContext();
  const isTab = token.type === DSLLexer.TAB;

  return (
    <span
      className='relative'
      style={{ color: getTokenColor(token.type, mainContext.theme) }}
    >
      {token.text}
      {isTab && <ArrowRightToLine className="absolute inset-0 m-auto size-3 opacity-50" />}
    </span>
  );
}
