"use client";
import { Button, Input } from "@repo/ui";
import { ModeToggle } from "./ModeToggle";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <ModeToggle />
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" variant="outlined">
          Subscribe
        </Button>
      </div>
    </div>
  );
}
