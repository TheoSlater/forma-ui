"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  children,
  className,
  value,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & { value: string }) {
  /*
    we expecct to pass the current active tab value here 
    so we can control the blob position. bit annoying :/
    
    We could actually use a context to store the active tab value
    and use that to control the blob position, but for now
    we will just pass the value as a prop.
  */

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [blobStyle, setBlobStyle] = React.useState<{
    left: number;
    width: number;
  } | null>(null);

  React.useLayoutEffect(() => {
    if (!containerRef.current) return;

    const activeTab = containerRef.current.querySelector(
      `[data-state="active"]`
    ) as HTMLElement;

    if (activeTab) {
      setBlobStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [value, children]);

  return (
    <TabsPrimitive.List
      ref={containerRef}
      data-slot="tabs-list"
      className={cn(
        "relative bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    >
      {blobStyle && (
        <motion.div
          layoutId="tabsBlob"
          className="absolute top-[3px] bottom-[3px] rounded-lg bg-white/20 backdrop-blur-sm transition-colors" // using framer-motion to add the smooth slide for each tab
          style={{
            left: blobStyle.left,
            width: blobStyle.width,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}

      {children}
    </TabsPrimitive.List>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative z-10 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
