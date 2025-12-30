import { Route, Routes, Link } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div>hello world</div>} ></Route>
        <Route path="/about" element={<div>about us</div>} ></Route>
        <Route path="*" element={<div>404-Not Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
