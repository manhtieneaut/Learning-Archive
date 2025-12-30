import { Route, Routes, Link } from 'react-router-dom';
import ProductPage from './pages/Product';
import HomePage from './pages/Home';
import NewPage from './pages/New'
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav style={{ backgroundColor: 'gray' }}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/New">New</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/user/:userID" element={<HomePage />} ></Route>
        <Route path="/New" element={<NewPage />} ></Route>
        <Route path="/Product" element={<ProductPage />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>

      </Routes>
    </div>
  );
}

export default App;
