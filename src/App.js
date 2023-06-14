import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
