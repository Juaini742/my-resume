import About from "@/components/sections/main/About";
import Educations from "@/components/sections/main/Educations";
import Experiences from "@/components/sections/main/Experiences";
import Projects from "@/components/sections/main/Projects";
import Skills from "@/components/sections/main/Skills";

export default function Home() {
  return (
    <>
      <About />
      <Experiences />
      <Projects />
      <Educations />
      <Skills />
      <div className="my-96" />
      {/* {Array.from({ length: 200 }, (_, i) => (
        <p key={i}>{i}</p>
      ))} */}
    </>
  );
}
