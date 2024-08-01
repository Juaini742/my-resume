import profileImage from "@/assets/profile.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import ShinyButton from "@/components/magicui/shiny-button";
import SparklesText from "@/components/magicui/sparkles-text";

function Profile() {
  return (
    <div className="w-full flex flex-col items-center pt-5">
      <div className="bg-card p-3 rounded-full shadow-md shadow-primary/20">
        <Image src={profileImage} alt="profile" className="w-16" />
      </div>
      <SparklesText text="JUAINI" className="mt-3 text-xl font-bold" />
      <h3 className="font-extrabold text-[19px] text-transparent bg-gradient-to-b from-white to-black bg-clip-text">
        Full-Stack Developer
      </h3>
      <ShinyButton text="Download CV" className="my-2" />
      <Separator orientation="horizontal" className="w-full mt-3" />
    </div>
  );
}

export default Profile;
