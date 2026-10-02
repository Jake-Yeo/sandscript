import LanguageServiceProvider from '@/context/LanguageServiceProvider';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function Input() {
  return (
    <LanguageServiceProvider>
      <div className="p-5">
        <Textarea className="w-[512px] h-[512px]" />
        <Button variant="outline">Submit</Button>
      </div>
    </LanguageServiceProvider>
  );
}
