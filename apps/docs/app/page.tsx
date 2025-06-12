import { Button } from "@repo/ui";
import { Heart } from "lucide-react";

export default function Page() {
  return (
    <Button variant="default" size="lg">
      <Heart /> Like
    </Button>
  );
}
