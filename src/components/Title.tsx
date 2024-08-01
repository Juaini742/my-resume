import Image from "next/image";
import pinImage from "@/assets/images/pin.png";

function Title({ title }: { title: string }) {
  return (
    <div className="flex gap-2 items-end">
      <Image src={pinImage} alt="Star" className="w-7 md:w-9" />
      {/* <h2 className="text-lg font-bold bg-gradient-to-b dark:from-white from-black to-primary text-transparent bg-clip-text"> */}
      <h2 className="text-lg font-bold bg-gradient-to-b">{title}</h2>
    </div>
  );
}

export default Title;
