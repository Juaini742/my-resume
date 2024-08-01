import Meteors from "@/components/magicui/meteors";
import Title from "@/components/Title";
import { projects } from "@/contents";
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section className="mt-3 pr-4">
      <Title title="Projects" />
      <div className="mt-2 ml-8 flex flex-col gap-2">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative p-3 w-full overflow-hidden rounded-[10px] border bg-background"
          >
            <Meteors number={30} />
            {/* <Image src={} alt="" /> */}
            <div className="w-28 h-14 bg-green-200 rounded-md" />
            <div className="">
              <div className="flex justify-between items-center my-1">
                <h6 className="text-sm">{item.name}</h6>
                <span className="text-xs italic">{item.date}</span>
              </div>
              <ul>
                {item.description.map((data, index) => (
                  <li
                    key={index}
                    className="text-xs font-normal list-disc ml-4"
                  >
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
