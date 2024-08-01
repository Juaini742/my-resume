import Meteors from "@/components/magicui/meteors";
import Title from "@/components/Title";
import { educations, projects } from "@/contents";
import Image from "next/image";
import React from "react";

function Educations() {
  return (
    <section className="mt-3 pr-4">
      <Title title="Educations" />
      <div className="mt-2 ml-8 flex flex-col gap-2">
        {educations.map((item, index) => (
          <div
            key={index}
            className="relative p-3 w-full overflow-hidden rounded-[10px] border bg-background"
          >
            <Meteors number={30} />
            <div className="flex justify-between items-center my-1">
              <div className="flex items-end gap-2">
                {/* <div className="w-10 h-10 bg-green-300 rounded-md" /> */}
                <Image
                  src={item.image}
                  alt={item.school}
                  className="w-6 md:w-10"
                />
                <h6 className="text-xs">{item.school}</h6>
              </div>
              <div className="text-xs italic">
                {item.startYear} - {item.endYear}
              </div>
            </div>
            <p className="text-xs">
              {item.degree}, <span className="italic"> {item.field}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educations;
