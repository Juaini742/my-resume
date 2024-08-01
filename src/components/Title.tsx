import Image from "next/image";
import StarImage from "@/assets/star.png";

function Title({ title }: { title: string }) {
  return (
    <div className="flex gap-2 items-center">
      <Image src={StarImage} alt="Star" className="w-5 md:w-6" />
      <h2 className="text-lg font-bold bg-gradient-to-b dark:from-white from-black to-primary text-transparent bg-clip-text">
        {title}
      </h2>
    </div>
  );
}

export default Title;
