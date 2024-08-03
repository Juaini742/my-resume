import CardContainer from "@/components/CardContainer";
import BlurFade from "@/components/magicui/blur-fade";
import Meteors from "@/components/magicui/meteors";
import Title from "@/components/Title";
import { educations } from "@/contents";
import Image from "next/image";

function Educations() {
  return (
    <section className="mt-3 pr-4">
      <Title title="Educations" />
      <CardContainer className="flex flex-col gap-2">
        {educations.map((item, index) => (
          <BlurFade delay={0.1 * (index + 1)} inView key={index}>
            <div className="relative p-3 w-full overflow-hidden rounded-[6px] border bg-background">
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
          </BlurFade>
        ))}
      </CardContainer>
    </section>
  );
}

export default Educations;
