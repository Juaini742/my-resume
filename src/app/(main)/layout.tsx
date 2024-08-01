import { Navbar } from "@/components/Navbar";
import Aside from "@/components/sections/aside/Aside";
import Language from "@/components/sections/aside/Language";
import Profile from "@/components/sections/aside/Profile";
import SocialMedia from "@/components/sections/aside/SocialMedia";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="h-screen overflow-hidden flex gap-3">
        <Aside>
          <Profile />
          <SocialMedia />
          <Language />
        </Aside>
        <ScrollArea className="flex-1">{children}</ScrollArea>
      </div>
    </>
  );
}
