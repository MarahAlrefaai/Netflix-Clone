import './App.css';
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import FavList from './components/FavList';
import NavbaR from './components/Navbar';
function App() {
  return (
    <div>
      <NavbaR />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList  />} />
      </Routes>
    </div>
  );
}
export default App;
