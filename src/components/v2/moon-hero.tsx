"use client";

/* three.js is heavy, so the moon loads lazily on the client; the hero
 * reserves its box and the moon fades in when ready. Open the page with
 * ?brand=1 to preview the brand-tinted (blue/peach) version of the scene. */
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Moon = dynamic(() => import("./moon").then((m) => m.Moon), {
  ssr: false,
  loading: () => null,
});

export function MoonHero({ className }: { className?: string }) {
  const [brand, setBrand] = useState(false);

  useEffect(() => {
    setBrand(new URLSearchParams(window.location.search).has("brand"));
  }, []);

  // the wrapper owns the box size so the page never reflows when the lazy
  // three.js chunk arrives (a late 640px jump also broke #work anchors)
  return (
    <div className={className}>
      <Moon className="h-full w-full" variant={brand ? "brand" : "classic"} />
    </div>
  );
}
