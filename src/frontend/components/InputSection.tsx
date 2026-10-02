import TextInput from './TextInput';
import { Button } from './ui/button';

export default function InputSection() {
  return (
    <div className="p-5">
      <TextInput />
      <Button variant="outline">Submit</Button>
    </div>
  );
}
