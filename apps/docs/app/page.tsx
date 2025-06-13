"use client";
import { Dialog } from "@repo/ui";
import { useRef } from "react";
import { ModeToggle } from "./ModeToggle";

export default function Home() {
  const myRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <Dialog>
        <Dialog.Trigger>OPEN</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content variant="center" size="sm" initialFocus={myRef}>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <div ref={myRef}>Content</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
      <ModeToggle />
    </>
  );
}
