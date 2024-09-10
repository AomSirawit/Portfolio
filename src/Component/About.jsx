import "../App.css";
import Navbar from "./Navbar.jsx";

function About() {
  return (
    <>
      <div className="flex items-center justify-center h-screen" id="about">
        <div className="text-center">
          <div className="mt-10">
            <h1 className="text-6xl text-primary font-bold bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text outer-glow mb-5">
              Who Is Me?
            </h1>
            <div className="container mx-auto px-20 mt-5">
              <p className="text-pretty">
                Hello, I'm Sirawit Makdee is a recent Computer Science graduate
                from Rajamangala University of Technology Phra Nakhon. With a
                strong foundation in web development, I possess proficiency in
                PHP, Laravel, MySQL, ReactJS, Node.js, and MySQL. My practical
                experience includes a web development internship at Orange
                Technology Solution Company Limited and freelancing as a
                frontend developer at NBA Tech Innovator. Additionally, I have
                created a YouTube and TikTok channel name ITFeature to share my
                knowledge and insights on programming and development.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default About;
