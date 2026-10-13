import { useGameContext } from "@/context/GameContext"
import { Button } from "./ui/button";

export default function ElementSelector() {
  const { elements, setElement } = useGameContext();

  return (<div>
    {elements.map((elm) => (
      <Button key={elm} onClick={() => setElement(elm)}>
        {elm}
      </Button>
    ))}
  </div>)
}
