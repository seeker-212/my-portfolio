import { Preloader } from "@/components/preloader";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
