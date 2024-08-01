"use client";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useState } from "react";
import EmojiImage from "@/assets/emoji.png";

function Aside({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Badge
        variant="secondary"
        onClick={() => setIsVisible((prev) => !prev)}
        className={`absolute top-3  z-50 p-1 rounded shadow-md transition-all duration-300 block md:hidden ${
          isVisible ? "left-[16rem]" : "left-3"
        }`}
      >
        <Image src={EmojiImage} alt="Menu" className="w-8 animate-bounce" />
      </Badge>
      <ScrollArea
        className={`p-2 h-full max-w-0 w-0 md:max-w-[15rem] md:w-[15rem] border-r-2 transition-all duration-300 ${
          isVisible ? "w-[15rem] max-w-[15rem]" : "max-w-0"
        }`}
      >
        <aside className="flex flex-col">{children}</aside>
      </ScrollArea>
    </>
  );
}

export default Aside;
