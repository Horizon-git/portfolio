import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex mt-12 md:flex-col-reverse">
        <div className="w-1/2 md:w-full">
          <p className="text-2xl mb-2 lg:text-xl">Hello, I&apos;m</p>
          <h1 className="text-5xl mb-2 lg:text-4xl">Sherashov Oleksandr</h1>
          <p className="text-3xl lg:text-2xl"><span className="text-[#842D54] font-semibold">Frontend</span> web developer</p>
          <p className="text-xl mb-2 lg:text-lg mt-20 lg:mt-10">tools i <span className="text-[#842D54]">like</span> most</p>
          <div className="flex flex-wrap gap-4">
            <Image src={"next.svg"} alt={"next"} width={141} height={96} className="transition-all hover:scale-105  hover:cursor-pointer"/>
            <Image src={"react-logo-inline.svg"} alt={"react"} width={141} height={96} className="transition-all hover:scale-105  hover:cursor-pointer" />
            <Image src={"typescript.svg"} alt={"react"} width={60} height={96} className="transition-all hover:scale-105  hover:cursor-pointer" />
            <Image src={"redux.svg"} alt={"react"} width={141} height={96} className="transition-all hover:scale-105  hover:cursor-pointer" />
            <Image src={"figma.svg"} alt={"react"} width={141} height={96} className="transition-all hover:scale-105  hover:cursor-pointer" />
          </div>

        </div>
        <div className="w-1/2 md:w-full">
          <Image src={"programming2.svg"} alt={"Programming"} width={500} height={500} />
        </div>
      </section>

      <section className="flex flex-col px-12 mt-20 sm:px-2 sm:justify-center">
        <div className="flex justify-between items-center sm:justify-center">
          <h1 className="text-4xl uppercase lg:text-3xl sm:text-2xl">Recent projects</h1>
          <Link className="sm:hidden text-xl md:text-lg sm:text-sm transition-all border border-transparent bg-[#842D54] text-white px-4 py-2 sm:px-2 sm:py-1 rounded hover:text-[#842D54] hover:bg-white hover:border-[#842D54]" href="/projects">See all</Link>
        </div>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          {projects.slice(0, 3).map(project => (
            <ProjectCard key={project.codeLink} project={project} />
          ))}
        </div>
        <div className="hidden sm:flex sm:justify-center">
          <Link className="sm:flex sm:justify-center md:hidden w-24 mt-8 md:text-lg transition-all border border-transparent bg-[#842D54] text-white px-2 py-1 rounded hover:text-[#842D54] hover:bg-white hover:border-[#842D54]" href="/projects">See all</Link>
        </div>
      </section>
    </div>
  );
}
