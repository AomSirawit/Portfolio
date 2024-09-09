import "../App.css";
import Navbar from "./Navbar.jsx";

function Exp() {
  return (
    <>
      <div className="text-center" id="exp">
      <div className="mx-10">
      <h1 className="text-5xl text-primary font-bold bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text outer-glow my-20">
            Experience
          </h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical -z-10">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2021-2025</time>
              <div className="text-lg text-secondary font-semibold">
                Graduated Computer Science
              </div>
              I graduated with a Bachelor's degree in Computer Science from the
              Faculty of Science and Technology, Rajamangala University of
              Technology Phra Nakhon, with a GPA of 3.60.
            </div>
            <hr className="bg-slate-500" />
          </li>
          <li>
            <hr className="bg-slate-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2023 - Present</time>
              <div className="text-lg text-secondary font-semibold">
                Tiktok and Youtube Creator, ITFeature
              </div>
              I have created a YouTube and TikTok channel name ITFeature to
              share my knowledge and insights on programming and development
            </div>
            <hr className="bg-slate-500" />
          </li>
          <li>
            <hr className="bg-slate-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2024</time>
              <div className="text-lg text-secondary font-semibold">
                Internship, Orange Technology Solution Company Limited
              </div>
              I completed a four-month internship as a Web Developer at Orange
              Technology Solution Company Limited. My responsibilities included
              developing back-end functionalities using PHP and the Laravel
              framework, troubleshooting and fixing website issues, creating
              dashboards, designing MySQL databases, and collaborating with
              clients in meetings.
            </div>
            <hr className="bg-slate-500" />
          </li>
          <li>
            <hr className="bg-slate-500" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2024 - Present</time>
              <div className="text-lg text-secondary font-semibold">
                Freelance, NBA Tech Innovator
              </div>
              I collaborated with two other freelancers on a project where I
              took on the role of frontend developer. Our tech stack included
              ReactJS, TailwindCSS, NodeJS, and a MySQL database.
            </div>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Exp;
