import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="flex flex-col w-[376px] sm:w-[264px]">
      <Link href={project.demoLink} className="transition-all hover:scale-110">
        <div className="transition-all p-2 border border-slate-800 relative h-[200px] w-full sm:h-[148.5px] hover:rounded-tl-xl hover:rounded-br-2xl">
          <div className="absolute top-[10px] right-[10px] ring-1 ring-[#842D54] rounded-md overflow-hidden sm:hidden md:flex">
            <div className="relative w-[240px] h-[135px] sm:w-[216px] sm:h-[121.5px]">
              <Image src={project.imgURL2} alt={project.title} fill />
            </div>
          </div>
          <div className="absolute bottom-[10px] left-[10px] ring-1 ring-[#842D54] rounded-lg overflow-hidden sm:hidden md:flex">
            <div className="relative w-[240px] h-[135px] sm:w-[216px] sm:h-[121.5px] ring-1 ring-[#842D54] rounded-lg overflow-hidden">
              <Image src={project.imgURL1} alt={project.title} fill />
            </div>
          </div>
          <Image
            src={project.imgURL2}
            alt={project.title}
            fill
            className="sm:flex hidden"
          />
        </div>
      </Link>
      <div className="flex gap-2 mt-4 flex-wrap">
        {project.technologies.map((title) => (
          <div
            key={title}
            className="bg-[#842D54] text-white px-2 py-1 text-xs rounded-md"
          >
            {`#${title}`}
          </div>
        ))}
      </div>
      <h2 className="text-xl mt-2">{project.title}</h2>
      <p className="mt-1">{project.description}</p>
      <div className="flex gap-3 mt-2">
        <Link
          href={project.demoLink}
          className="flex gap-1 items-center uppercase transition-opacity hover:opacity-65"
        >
          <Image
            src={"./website.svg"}
            alt="demo link svg"
            width={20}
            height={20}
          />
          <span className="text-xs">Demo</span>
        </Link>
        <Link
          href={project.codeLink}
          className="flex gap-1 items-center uppercase hover:opacity-65"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
          >
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          <span className="text-xs">Code</span>
        </Link>
      </div>
    </div>
  );
}
