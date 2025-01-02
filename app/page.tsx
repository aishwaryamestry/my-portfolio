import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

import { Banner } from "@/components/main/Banner";
import AboutMe from "@/components/main/AboutMe";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Banner />
        <AboutMe />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
