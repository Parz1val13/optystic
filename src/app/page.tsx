import { Hero2 } from "@/components/v2/hero2";
import { Nav2 } from "@/components/v2/nav2";
import { NightEnding } from "@/components/v2/night-ending";
import { Process2 } from "@/components/v2/process2";
import { ScrollRing } from "@/components/v2/scroll-ring";
import { Services2 } from "@/components/v2/services2";
import { Work2 } from "@/components/v2/work2";

export default function Home() {
  return (
    <>
      <Nav2 />
      <main className="flex-1">
        <Hero2 />
        <Work2 />
        <Services2 />
        <Process2 />
      </main>
      <NightEnding />
      <ScrollRing />
    </>
  );
}
