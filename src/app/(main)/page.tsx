import BlurFade from "@/components/magicui/blur-fade";
import About from "@/components/sections/main/About";
import Educations from "@/components/sections/main/Educations";
import Experiences from "@/components/sections/main/Experiences";
import Projects from "@/components/sections/main/Projects";
import Skills from "@/components/sections/main/Skills";

export default function Home() {
  return (
    <>
      <BlurFade delay={0.12} inView>
        <About />
      </BlurFade>
      <BlurFade delay={0.17} inView>
        <Experiences />
      </BlurFade>
      <Projects />
      <Educations />
      <Skills />
      <div className="my-20" />
    </>
  );
}
