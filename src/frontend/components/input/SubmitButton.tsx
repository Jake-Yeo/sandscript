import { useLanguageServiceContext } from "@/context/LanguageServiceContext";
import { Button } from "../ui/button";

export default function SubmitButton() {
  const langService = useLanguageServiceContext();

  return (
    <Button variant="outline" disabled={langService.isCompiling} onClick={() => langService.compile()}>Submit</Button>
  );
}
