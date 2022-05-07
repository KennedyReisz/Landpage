// Import's [modules]
import logo from "../assets/Images/IMG_9442.jpg";

// Import's Components
import "./Initial.css";

// Application
const Initial = () => {
  return (
    <div className="container">
      <div className="container-center">
        <img src={logo} />

        <h3>Hello, I'm Kennedy!</h3>

        <div className="buttons">
          <button>
            <a href="/about">About me</a>
          </button>
          <button>
            <a href="https://github.com/KennedyReisz">Github</a>
          </button>
          <button>
            <a href="/projects">Projects</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Initial;
