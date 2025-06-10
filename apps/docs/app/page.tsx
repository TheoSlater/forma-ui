"use client";
import { SegmentedControl } from "@repo/ui";

export default function Home() {
  return (
    <SegmentedControl
      options={["All", "Favorites", "Archived", "Deleted"]}
      variant="outline"
      size="lg"
    />
  );
}
