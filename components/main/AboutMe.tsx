"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import ProjectCard from "../sub/ProjectCard";
import AboutCard from "../sub/AboutCard";
import Image from "next/image";
import javascriptIcon from "@/public/js.png";
import HTMLIcon from "@/public/html.png";
import CssIcon from "@/public/css.png";
import ReactIcon from "@/public/react.png";
import ChromeIcon from "@/public/icons8-chrome.svg";
import GithubIcon from "@/public/gitwhite.png";
import bookImg from "@/public/book-cover.png";
import bootstrapIcon from "@/public/bootstrap.png";
import vsCodeIcon from "@/public/icons8-vs-code.svg";
import tailwindCssIcon from "@/public/icons8-tailwindcss.svg";
import { title } from "process";

export default function AboutMe() {
  const toolboxItems = [
    { title: "HTML5", icon: HTMLIcon },
    { title: "CSS3", icon: CssIcon },
    { title: "JavaScript", icon: javascriptIcon },
    { title: "React", icon: ReactIcon },
    { title: "Bootstrap", icon: bootstrapIcon },
    { title: "Chrome DevTools", icon: ChromeIcon },
    { title: "VsCode", icon: vsCodeIcon },
    { title: "tailwindCssIcon", icon: tailwindCssIcon },
  ];

  const hobbies = [
    {
      title: "Painting",
      emoji: "🎨",
    },
    {
      title: "Photography",
      emoji: "📸",
    },
    {
      title: "Gamming",
      emoji: "🎮",
    },
    {
      title: "Hiking",
      emoji: "🌄",
    },
    {
      title: "Riding",
      emoji: "🛵",
    },
    {
      title: "Music",
      emoji: "🎶",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-20 mx-4"
      id="about-me"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">About Me</h1>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        A glimpse Into my World
      </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* <AboutCard
          title="My Reads"
          description="Explore the books shaping my perspectives."
        >
          <Image
            src={bookImg}
            alt="Book cover"
            width={100}
            height={100}
            className=""
          />
        </AboutCard> */}

        <AboutCard
          title="My Mostly Used Tools"
          description="Explore the technologies and tools I use to craft exceptional digital experiences"
        >
          <div className="flex flex-wrap gap-4">
            {toolboxItems.map((item) => (
              <div key={item.title} className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={40}
                  height={40}
                />
                <span className="text-gray-200 text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </AboutCard>

        <AboutCard
          title="Beyond the code"
          description="Discover the passions that fuel my creativity beyond coding."
        >
          {hobbies.map((hobby) => (
            <div
              key={hobby.title}
              className=" inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 m-3"
            >
              <span className="font-medium text-gray-950">{hobby.title}</span>
              <span>{hobby.emoji}</span>
            </div>
          ))}
        </AboutCard>
      </div>
    </div>
  );
}
