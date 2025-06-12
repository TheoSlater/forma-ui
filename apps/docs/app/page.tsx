import { Button } from "@repo/ui/components/Button";
import { Heart } from "lucide-react";

export default function Page() {
  return (
    <Button variant="default" size="default">
      <Heart /> Like
    </Button>
  );
}
