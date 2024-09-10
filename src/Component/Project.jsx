import "../App.css";
import RandomTamsang from '../assets/random.png'
import Movie from '../assets/movie.png'
import WebBoard from '../assets/webboard.png'

function Project() {
  return (
    <>
      <div className="flex items-center justify-center" id="project">
        <div className="text-center">
          <div className="m-5">
            <h1 className="text-6xl text-primary font-bold bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text outer-glow mb-5">
              Project
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card card-compact w-96 shadow-xl bg-white text-neutral">
            <figure>
              <img
                src={ Movie }
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Movie Search</h2>
              <div className="flex"> 
                <div className="flex justify-start">
                <h3 className="text-gray-500">Stack :</h3>
                </div>
                <div className="flex justify-end mb-5">
                <div className="badge badge-success badge-outline mx-1">VueJS</div>
                <div className="badge badge-primary badge-outline mx-1">TailwindCSS</div>
                <div className="badge badge-secondary badge-outline mx-1">API</div>
                </div>
              </div>
              <div className="card-actions justify-end">
                <a href="#" className="btn btn-primary text-white">Github</a>
                <a href="#" className="btn btn-secondary text-white">Live Demo</a>
              </div>
            </div>
          </div>
          
          <div className="card card-compact w-96 shadow-xl bg-white text-neutral">
            <figure>
              <img
                src={ RandomTamsang }
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Random Tamsang</h2>
              <div className="flex"> 
                <div className="flex justify-start">
                <h3 className="text-gray-500">Stack :</h3>
                </div>
                <div className="flex justify-end mb-5">
                <div className="badge badge-primary badge-outline mx-1">ReactJS</div>
                <div className="badge badge-primary badge-outline mx-1">TailwindCSS</div>
                </div>
              </div>
              <div className="card-actions justify-end">
                <a href="#" className="btn btn-primary text-white">Github</a>
                <a href="#" className="btn btn-secondary text-white">Live Demo</a>
              </div>
            </div>
          </div>

          <div className="card card-compact w-96 shadow-xl bg-white text-neutral">
            <figure>
              <img
                src={ WebBoard }
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Board</h2>
              <div className="flex"> 
                <div className="flex justify-start">
                <h3 className="text-gray-500">Stack :</h3>
                </div>
                <div className="flex justify-end mb-5">
                <div className="badge badge-accent badge-outline mx-1">Laravel</div>
                <div className="badge badge-primary badge-outline mx-1">TailwindCSS</div>
                <div className="badge badge-warning badge-outline mx-1">MySQL</div>
                </div>
              </div>
              <div className="card-actions justify-end">
                <a href="#" className="btn btn-primary text-white">Github</a>
                <a href="#" className="btn btn-secondary text-white">Live Demo</a>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
