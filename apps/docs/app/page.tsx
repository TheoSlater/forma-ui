"use client";
import { Tabs, TabsList, TabsTrigger } from "@repo/ui";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";

export default function Home() {
  const [tab, setTab] = useState("tab1");

  return (
    <>
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList value={tab}>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
      </Tabs>
      <ModeToggle />
    </>
  );
}
