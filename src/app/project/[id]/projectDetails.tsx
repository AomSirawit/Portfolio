"use client";

import { useParams } from "next/navigation";

const projects = [
  {
    id: "nin-farm",
    img: "/assets/Growth.png",
    title: "หมวดนินทร์ ฟาร์ม",
    description:
      "ระบบจัดการออเดอร์ (Order Management System) สำหรับฟาร์มพ่อผม โดยมีฟังก์ชันการทำงานหลักๆ คือ การจัดการสินค้า การจัดการออเดอร์",
    tech: ["Laravel", "Tailwind", "MySQL"],
    link: "#",
  },
  {
    id: "saboard",
    img: "/assets/saboard.png",
    title: "เว็บแอปพลิเคชันสนับสนุนงานกิจการนักศึกษาสำหรับตอบคำถามที่พบบ่่อย",
    description:
      "โปรเจคจบปี 4 เป็นเเว็บแอปพลิเคชันที่ใช้ระบบจัดการคอนเทนต์ (Content Management System) คือ เพิ่ม ลบ แก้ไข คำถาม ข่าวสาร หมวดหมู่ ผู้ใช้ เป็นต้น",
    tech: ["Laravel", "Tailwind", "MySQL"],
    link: "https://saboard.chesster.net/",
  },
  {
    id: "finhome",
    img: "/assets/finhome.png",
    title: "Finhome",
    description:
      "เป็นเว็บไซต์ CMS ที่ทำกับฟรีแลนซ์อีกสองคน โดยผมทำ Frontend ด้วย ReactJS และ TailwindCSS",
    tech: ["ReactJS", "Tailwind"],
    link: "https://finhome.co.th/",
  },
  {
    id: "itfeature",
    img: "/assets/itfeature.png",
    title: "ITFeature",
    description:
      "เป็นเว็บไซต์รับงานฟรีแลนซ์ โดยพัฒนาด้วย Nextjs และ TailwindCSS",
    tech: ["Nextjs", "TailwindCSS"],
    link: "https://itfeature.vercel.app/",
  },
  {
    id: "movie-search",
    img: "/assets/MovieSearch.png",
    title: "MovieSearch",
    description:
      "เป็นเว็บไซต์ที่ผมได้ฝึกการ Fetch Api โดยใช้ Api ฟรีของ OMDb API โดยพัฒนาด้วย VueJS และ TailwindCSS",
    tech: ["VueJS", "TailwindCSS"],
    link: "https://smovies-search.netlify.app/",
  },
];

export default function ProjectDetails() {
  const params = useParams();
  const id = params.id as string;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-10 md:py-44 mx-10">
        <div className="container mx-auto max-w-2xl bg-gray-900 py-10 px-5 rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-bold">ไม่พบโปรเจกต์นี้ ❌</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 md:py-44 mx-10">
      <div className="container mx-auto max-w-5xl bg-gray-900 py-10 px-5 rounded-xl shadow-md text-center">
        <img
          className="w-full rounded-lg transition delay-150 duration-300 ease-in-out hover:scale-105"
          src={project.img}
          alt={project.title}
        />
        <h1 className="text-2xl font-bold mt-5 break-words">{project.title}</h1>
        <p className="text-md text-gray-400 mt-2">{project.description}</p>
        <a
          href={project.link}
          className="text-gray-600 hover:text-gray-300 hover:underline"
        >
          {project.link}
        </a>
        <div className="flex flex-wrap items-center justify-center mt-4">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500 mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
