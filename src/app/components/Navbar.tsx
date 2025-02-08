import { FaFileDownload } from "react-icons/fa";
export default function Navbar() {
  return (
    <nav className="text-white px-6 py-4 fixed w-full z-10 top-0 start-0 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <a href="/">Sirawit <span className="text-gray-400">Portfolio</span></a>
        </div>
        <div>
          <button className="bg-gray-900 hover:bg-black text-white p-3 rounded-md text-sm flex">
            Download Resume<span className="ml-3"> <FaFileDownload /></span>
          </button>
        </div>
      </div>
    </nav>
  );
};