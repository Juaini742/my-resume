import CardContainer from "@/components/CardContainer";
import BlurFade from "@/components/magicui/blur-fade";
import Meteors from "@/components/magicui/meteors";
import Title from "@/components/Title";
import { projects } from "@/contents";
import React from "react";

function Projects() {
  return (
    <section className="mt-3 pr-4">
      <Title title="Projects" />
      <CardContainer className="flex flex-col gap-2">
        {projects.map((item, index) => (
          <BlurFade delay={0.1 * (index + 1)} inView key={index}>
            <div className="relative p-3 w-full overflow-hidden rounded-[6px] border bg-background">
              <Meteors number={30} />
              <div>
                <div className="flex justify-between items-center my-1">
                  <h6 className="text-sm">{item.name}</h6>
                  <span className="text-xs italic text-muted-foreground">
                    {item.date}
                  </span>
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
          </BlurFade>
        ))}
      </CardContainer>
    </section>
  );
}

export default Projects;
