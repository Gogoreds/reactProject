import react from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './routes/Contact';
import Main from './routes/Main';
import Projects from './routes/Projects';
import Technology from './routes/Technology';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
