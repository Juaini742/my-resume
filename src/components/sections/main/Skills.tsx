import CardContainer from "@/components/CardContainer";
import Meteors from "@/components/magicui/meteors";
import Title from "@/components/Title";
import { skills } from "@/contents";

function Skills() {
  return (
    <section className="mt-3">
      <Title title="Skills" />
      <CardContainer>
        <h5 className="mb-3">Dev Skills</h5>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {skills.dev.map((item, index) => (
            <div
              key={index}
              className="p-3 w-full  rounded-[8px] bg-background hover:opacity-35 transition-all duration-300 cursor-pointer"
              style={{
                border: `1px solid ${item.color}`,
                backgroundColor: `${item.color}30`,
              }}
            >
              <div className="flex gap-1 md:gap-2">
                <span
                  className="text-xs md:text-base"
                  style={{
                    color: item.name === "NextJs" ? "" : item.color,
                  }}
                >
                  {item.icon}
                </span>
                <span className="text-xs">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <h5 className="my-3">Styling Skills</h5>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {skills.styling.map((item, index) => (
            <div
              key={index}
              className="p-3 w-full  rounded-[8px] bg-background hover:opacity-35 transition-all duration-300 cursor-pointer"
              style={{
                border: `1px solid ${item.color}`,
                backgroundColor: `${item.color}30`,
              }}
            >
              <div className="flex gap-1 md:gap-2">
                <span
                  className="text-xs md:text-base"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
                <span className="text-xs">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <h5 className="my-3">Styling Skills</h5>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {skills.tools.map((item, index) => (
            <div
              key={index}
              className="p-3 w-full  rounded-[8px] bg-background hover:opacity-35 transition-all duration-300 cursor-pointer"
              style={{
                border: `1px solid ${item.color}`,
                backgroundColor: `${item.color}30`,
              }}
            >
              <div className="flex gap-1 md:gap-2">
                <span
                  className="text-xs md:text-base"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
                <span className="text-xs">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContainer>
    </section>
  );
}

export default Skills;
