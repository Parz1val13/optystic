import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
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
        <Stats />
        <Work />
        <Services />
        <Process />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
