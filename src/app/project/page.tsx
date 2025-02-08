import Link from "next/link";

export default function Page() {
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
    }
  ];



  return (
    <div className="py-10 md:py-44 mx-10">
      <div className="container mx-auto max-w-4xl bg-gray-900 py-10 px-5 rounded-xl shadow-md">
        <div className="flex justify-center items-center space-x-3">
          <h1 className="text-3xl font-bold text-center">All Projects</h1>
          <span className="ml-3 text-xl">📌</span>
        </div>

        {/* Grid layout for projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
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

      </div>
    </div>
  );
}
