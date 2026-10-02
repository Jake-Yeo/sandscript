import { useLanguageServiceContext } from '@/context/LanguageServiceContext';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

export default function InputSection() {
  const langService = useLanguageServiceContext();

  return (
    <div className="p-5">
      <Textarea
        className="w-[512px] h-[512px] resize-none"
        value={langService.text}
        onChange={(e) => langService.setText(e.target.value)}
      />
      <Button variant="outline">Submit</Button>
    </div>
  );
}
