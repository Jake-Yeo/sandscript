import ElementSelector from './ElementSelector';
import GameRenderer from './GameRenderer';
import StrokeSelector from './StrokeSelector';

export default function GameSection() {
  return (
    <div className="p-5">
      <GameRenderer />
      <ElementSelector />
      <StrokeSelector />
    </div>
  );
}
