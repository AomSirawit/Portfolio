import "../App.css";
import Navbar from "./Navbar.jsx";
import TailwindLogo from "../assets/tailwindcss.svg";
import MySql from "../assets/mysql-icon.svg";

function Skills() {
  return (
    <>
      <div class="flex items-center justify-center h-screen" id="skills">
        <div class="text-center">
          <div class="m-5">
            <h1 class="text-5xl text-primary font-bold bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text outer-glow">
              Skills
            </h1>
          
          </div>

          <div>
            <h1 className="m-5">Programing Language</h1>
            <div className="grid grid-cols-5 gap-4">
              <div
                className="badge badge-outline w-10 h-10 text-xl"
                style={{ color: "#ff5733" }}
              >
                <i class="fa-brands fa-html5"></i>
              </div>
              <div
                className="badge badge-outline w-10 h-10 text-xl"
                style={{ color: "#264de4" }}
              >
                <i class="fa-brands fa-css3-alt"></i>
              </div>
              <div
                className="badge badge-outline w-10 h-10 text-xl"
                style={{ color: "#f0db4f" }}
              >
                <i class="fa-brands fa-js"></i>
              </div>
              <div className="badge badge-primary badge-outline w-10 h-10 text-xl">
                <i class="fa-brands fa-php"></i>
              </div>
              <div
                className="badge badge-outline w-10 h-10 text-xl"
                style={{ color: "#ffde57" }}
              >
                <i class="fa-brands fa-python"></i>
              </div>
            </div>
          </div>

          <div className="container">
            <h1 className="m-5 text-center">Frontend</h1>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-4 gap-4">
                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#61dbfb" }}
                >
                  <i className="fa-brands fa-react"></i>
                </div>
                <div className="badge badge-primary badge-outline w-10 h-10 text-xl">
                  <img
                    src={TailwindLogo}
                    alt="Tailwind CSS Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#42b883" }}
                >
                  <i className="fa-brands fa-vuejs"></i>
                </div>
                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#6610f2" }}
                >
                  <i class="fa-brands fa-bootstrap"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h1 className="m-5 text-center">Backend</h1>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#F05340" }}
                >
                  <i class="fa-brands fa-laravel"></i>
                </div>

                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#00758f" }}
                >
                  <img
                    src={MySql}
                    alt="MySql"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h1 className="m-5 text-center">Others</h1>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#F1502F" }}
                >
                  <i class="fa-brands fa-git-alt"></i>
                </div>

                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#ffff" }}
                >
                  <i class="fa-brands fa-github"></i>
                </div>
                <div
                  className="badge badge-outline w-10 h-10 text-xl"
                  style={{ color: "#ffff" }}
                >
                  <i class="fa-brands fa-figma"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Skills;
