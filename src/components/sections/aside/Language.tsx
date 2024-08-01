import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Indonesia from "@/assets/Indonesia.jpg";
import English from "@/assets/English.jpg";
import WaImage from "@/assets/wa.png";
import BoxReveal from "@/components/magicui/box-reveal";

function Language() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <h2 className="text-sm text-muted-foreground">Languages</h2>
      <BoxReveal boxColor={"#16a34a"} duration={0.5}>
        <div className="flex items-center gap-3">
          <Image
            src={Indonesia}
            alt="Indonesia"
            className="w-6 md:w-7 rounded-md"
            title="Indonesia"
          />
          <span className="text-sm">Indonesia</span>
        </div>
      </BoxReveal>
      <BoxReveal boxColor={"#16a34a"} duration={0.5}>
        <div className="flex items-center gap-3">
          <Image
            src={English}
            alt="English"
            className="w-6 md:w-7 rounded-md"
            title="English"
          />
          <span className="text-sm">English</span>
        </div>
      </BoxReveal>
      {/* <Separator orientation="horizontal" className="w-full mt-3" /> */}
    </div>
  );
}

export default Language;
