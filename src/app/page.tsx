'use client';
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  type Project = {
    id: string;
    img: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
  };
  const projects: Project[] = [
    {
      id: "nin-farm",
      img: "/assets/Growth.png",
      title: "หมวดนินทร์ ฟาร์ม",
      description: "ระบบจัดการออเดอร์ (Order Management System) สำหรับฟาร์มพ่อผม โดยมีฟังก์ชันการทำงานหลักๆ คือ การจัดการสินค้า การจัดการออเดอร์",
      tech: ["Laravel", "Tailwind", "MySQL"],
      link: "#"
    },
    {
      id: "saboard",
      img: "/assets/saboard.png",
      title: "เว็บแอปพลิเคชันสนับสนุนงานกิจการนักศึกษาสำหรับตอบคำถามที่พบบ่่อย",
      description: "โปรเจคจบปี 4 เป็นเเว็บแอปพลิเคชันที่ใช้ระบบจัดการคอนเทนต์ (Content Management System) คือ เพิ่ม ลบ แก้ไข คำถาม ข่าวสาร หมวดหมู่ ผู้ใช้ เป็นต้น",
      tech: ["Laravel", "Tailwind", "MySQL"],
      link: "https://saboard.chesster.net/"
    },
    {
      id: "finhome",
      img: "/assets/finhome.png",
      title: "Finhome",
      description: "เป็นเว็บไซต์ CMS ที่ทำกับฟรีแลนซ์อีกสองคน โดยผมทำ Frontend ด้วย ReactJS และ TailwindCSS",
      tech: ["ReactJS", "Tailwind"],
      link: "https://finhome.co.th/"
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="py-10 md:py-44 mx-10">
      <div className="container mx-auto max-w-2xl bg-gray-900 py-10 px-5 rounded-xl shadow-md">
        <div className="flex">
          <p className="text-5xl">👋</p>
          <div className="mx-5">
            <h1 className="text-3xl font-bold">Sirawit Makdee</h1>
            <h2 className="text-lg text-slate-300 font-semibold">Com-Sci Student</h2>
            <p className="text-md text-slate-400">makdeesirawit@gmail.com</p>
          </div>
        </div>

        <div className="py-10 md:py-10">
          <h1 className="text-2xl pb-5 font-bold">About</h1>
          <p className="text-md text-gray-400 text-pretty"> สวัสดี, ศิรวิทย์ มากดี เป็นบัณฑิตสาขาวิทยาการคอมพิวเตอร์จากมหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร ด้วยพื้นฐานที่แข็งแกร่งด้านการพัฒนาเว็บ ฉันมีความเชี่ยวชาญใน Laravel, MySQL, ReactJS และ TailwindCSS
            มีประสบการณ์การทำงานจริงจากการฝึกงานด้านการพัฒนาเว็บที่ บริษัท ออเรนจ์ เทคโนโลยี โซลูชั่น จำกัด ตำแหน่ง Web Programmer โดยใช้ tools Laravel MySQL เป็นเวลา 4 เดือน และได้ทำฟรีแลนซ์ในตำแหน่ง Frontend Developerด้านการพัฒนาเว็บไซต์ด้วย ReactJS, TailwindCSS เป็นเวลา 4 เดือน อีกด้วย
            นอกจากนี้ ยังสร้างช่อง YouTube Lemon8 และ TikTok ชื่อ ITFeature เพื่อแบ่งปันความรู้และข้อมูลเชิงลึกเกี่ยวกับการเขียนโปรแกรมและการพัฒนาเว็บ</p>

        </div>
        <div>
          <h1 className="text-2xl pb-5 font-bold">Experience</h1>

          <div>
            <div className="flex">
              <p className="text-xl">🧑‍💻</p>
              <h2 className="text-xl font-semibold pb-1">Web Developer Internship at Orange Technology Solution</h2>
            </div>
            <p className="text-md text-slate-400 pb-2">24 มิถุนายน 2024 - 11 ตุลาคม 2024</p>
            <p className="text-slate-400 text-md text-pretty pb-2">
              สำเร็จการฝึกงานเป็นระยะเวลา 4 เดือนในตำแหน่ง Web Programmer ที่บริษัท Orange Technology Solution Company Limited หน้าที่ของฉันรวมถึงการพัฒนาฟังก์ชันฝั่ง Back-end ด้วย Laravel แก้ไขปัญหาและปรับปรุงเว็บไซต์ สร้างแดชบอร์ด ออกแบบฐานข้อมูล MySQL และร่วมประชุมกับลูกค้าเพื่อประสานงานโครงการ
            </p>
            <div className="space-x-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500">Laravel</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500">MySQL</span>
            </div>
          </div>

          <div className="my-5">
            <div className="flex">
              <p className="text-xl">🧑‍💻</p>
              <h2 className="text-xl font-semibold pb-1">Web Developer Freelance</h2>
            </div>
            <p className="text-md text-slate-400 pb-2">2024 - ปัจจุบัน</p>
            <p className="text-slate-400 text-md text-pretty pb-2">
              เคยได้ร่วมงานกับฟรีแลนซ์อีกสองคนในโปรเจกต์หนึ่ง ซึ่งฉันรับหน้าที่เป็นนักพัฒนาส่วน Frontend Developer โดยใช้ ReactJS, TailwindCSS และตอนนี้ได้ออกมาทำคนเดียวในชื่อเพจ Facebook ชื่อ ITFeature และ Fastwork ชื่อ ITFeature โดย Stack ที่ใช้ คือ Laravel MySQL
            </p>
            <div className="space-x-2">
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500">ReactJS</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500">Tailwind</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500">Laravel</span>
              <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500">MySQL</span>
            </div>
          </div>

        </div>

        <div className="py-10 md:py-10">
          <h1 className="text-2xl pb-5 font-bold">Project</h1>
          {/* Map through projects */}
          {projects.map((project) => (
            <Link
              href={`/project/${project.id}`}
              rel="noopener noreferrer"
              key={project.id}
              className="flex flex-col items-center space-y-3 h-auto rounded-md hover:bg-neutral-900 duration-300 cursor-pointer p-5 hover:scale-105"
            >
              <img className="w-56" src={project.img} alt={project.title} />

              <div className="text-center">
                <h1 className="text-xl font-semibold">{project.title}</h1>
                <p className="text-md text-gray-400">{project.description}</p>
              </div>

              <div className="flex flex-wrap justify-center space-x-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-400 border border-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex space-x-2" >
          <a href="/project" className="text-md font-semibold no-underline hover:underline">View All Projects </a>
          <MdArrowOutward />
        </div>

        <div className="py-10 md:py-10">
          <h1 className="text-md pb-5 font-bold">Contact</h1>
          <div className="flex space-x-5 text-xl text-slate-400">

            <a href="#"><MdOutlineMail /> </a>
            <a href="#"><FaGithub /> </a>
            <a href="#"><FaLinkedin /> </a>

          </div>

        </div>

      </div>
      <button className="rounded-full bg-gray-900 text-white p-4 fixed bottom-5 right-5" onClick={scrollToTop}><FaAngleDoubleUp /></button>
    </div>
  );
}
