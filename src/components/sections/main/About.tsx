import CardContainer from "@/components/CardContainer";
import Title from "@/components/Title";
import { about } from "@/contents";

function About() {
  return (
    <section className="mt-3">
      <Title title="About" />
      <CardContainer className="leading-7">
        <p className="text-xs lg:text-base font-normal">{about}</p>
      </CardContainer>
    </section>
  );
}

export default About;
