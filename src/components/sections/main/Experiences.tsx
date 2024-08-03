import CardContainer from "@/components/CardContainer";
import Title from "@/components/Title";
import { experiences } from "@/contents";

function Experiences() {
  return (
    <section className="mt-3">
      <Title title="Experiences" />
      <CardContainer className="flex flex-col gap-2">
        {experiences.map((item, index) => (
          <div key={index} className="">
            <div className="flex items-end justify-between">
              <div>
                <h5 className="text-sm">{item.title}</h5>
                <span className="text-xs italic">
                  {item.company}, <span>{item.country}</span>
                </span>
              </div>
              <span className="text-xs italic">{item.date}</span>
            </div>
            <ul className="pl-5">
              {item.description.map((data, i) => (
                <li key={i} className="text-xs list-disc">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContainer>
    </section>
  );
}

export default Experiences;
