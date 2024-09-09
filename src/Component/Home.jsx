import "../App.css";
import "../Style/Home.css";
import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen" id="home">
        <div className="text-center">
          <div className="m-5">
            <h1 className="text-6xl text-primary font-bold bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text shadow-glow">
              Sirawit Makdee
            </h1>
          </div>
          <div className="m-5">
            <p className="typingEffect text-secondary font-semibold text-center">
              Web Developer
            </p>
          </div>
          <div className="w-3/5 mx-auto m-5">
            <p>
              I enjoy learning programming independently in my free time and
              have a passion for creating websites. I also advocate for
              programming to others.
            </p>
          </div>
          <div className="flex justify-center">
            <a href="/contact" className="btn btn-outline btn-primary">
              Contact Me
            </a>
            <a href="/about" className="btn btn-outline btn-primary ml-5">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
