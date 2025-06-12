import { Button } from "@repo/ui";
import { Heart } from "lucide-react";

export default function Page() {
  return (
    <Button variant="warning" size="lg">
      <Heart /> Like
    </Button>
  );
}
