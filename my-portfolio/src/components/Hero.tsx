import React from "react";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "contentful";

type HeroProps = {
  title: string;
  body: Document | string; // Có thể là string nếu không phải rich text
  image: string;
};

const Hero: React.FC<HeroProps> = ({ title, body, image }) => {
  return (
    <div className="flex mt-10 text-black bg-white justify-between items-center p-10 space-x-12 lg:flex-row ssm:flex-col ssm:space-y-10 animate-appear min-h-screen">
      <div className="lg:w-2/3 ssm:w-fit">
        <h2 className="text-2xl mb-5 text-black">I'm</h2>
        <h1 className="text-3xl">{title}</h1>
        <hr />
        <div className="mt-10 text-black font-san">
          {typeof body === "string" ? body : documentToReactComponents(body)}
        </div>
      </div>
      <div className="w-4/5 flex justify-center ssm:w-fit">
        <Image
          src={image || "/default-image.jpg"}
          alt="Hero Image"
          width={200}
          height={200}
          className="rounded-full w-2/3 border-8 border-black avt spin-on-load"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
