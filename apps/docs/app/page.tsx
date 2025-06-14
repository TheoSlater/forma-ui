"use client";
import { Button } from "@repo/ui";
import { ModeToggle } from "./ModeToggle";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ModeToggle />
      <div className="flex w-full max-w-sm items-center gap-2">
        <Button variant="outlined" onClick={() => toast("Hello, world!")}>
          Click me!
        </Button>
      </div>
    </div>
  );
}
