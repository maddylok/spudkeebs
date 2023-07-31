import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/home';
import About from './pages/About';
import Boards from './pages/Boards';
import Contact from './pages/Contact';
import Ep75 from './pages/ep75';
import Rk68 from './pages/rk68';
import K6 from './pages/k6';
import Gmmkpro from './pages/gmmkpro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Boards' element={<Boards />} />
          <Route path='/ep75' element={<Ep75 />} />
          <Route path='/rk68' element={<Rk68 />} />
          <Route path='/k6' element={<K6 />} />
          <Route path='/gmmkpro' element={<Gmmkpro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
