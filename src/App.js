import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/home';
import About from './pages/About';
import Boards from './pages/Boards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Boards' element={<Boards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
