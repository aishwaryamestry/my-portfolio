import Image from "next/image";
import React from "react";
import SparkleIcon from "@/public/sparkle.svg";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const AboutCard = ({ title, description, children }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <div className="relative p-4">
        <h1 className="flex gap-4 text-2xl font-semibold text-white">
          <span>
            <Image
              src={SparkleIcon}
              alt="Sparkle icon"
              width={30}
              height={30}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </span>
          <span>{title}</span>
        </h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="card-children">
          {children} {/* This renders the children passed to AboutCard */}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
