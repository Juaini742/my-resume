import { Navbar } from "@/components/Navbar";
import Language from "@/components/sections/aside/Language";
import Profile from "@/components/sections/aside/Profile";
import SocialMedia from "@/components/sections/aside/SocialMedia";
import Educations from "@/components/sections/main/Educations";
import Experiences from "@/components/sections/main/Experiences";
import Projects from "@/components/sections/main/Projects";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <Experiences />
      <Projects />
      <Educations />
      <div className="my-96" />
      {/* {Array.from({ length: 200 }, (_, i) => (
        <p key={i}>{i}</p>
      ))} */}
    </>
  );
}
