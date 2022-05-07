// Import's
import Initial from "./components/Initial";
import About from './components/pages/Aboutme/About'
import Projects from './components/pages/Projects/Projects'

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Initial />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
