import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Cta } from "@/components/sections/cta";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Stats />
        <Work />
        <Services />
        <Expertise />
        <Process />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
