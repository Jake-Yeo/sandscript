import { useGameContext } from "@/context/GameContext";
import { Button } from "../ui/button";

export default function StrokeSelector() {
  const { setStrokeSize } = useGameContext();

  return (<div>
    <Button onClick={() => setStrokeSize(1)}>
      1
    </Button>
    <Button onClick={() => setStrokeSize(2)}>
      2
    </Button>
    <Button onClick={() => setStrokeSize(3)}>
      3
    </Button>
    <Button onClick={() => setStrokeSize(4)}>
      4
    </Button>
  </div>)
}
